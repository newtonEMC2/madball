;(function(global, __){
    
    "use strict";
    
    var controller = (function(){
        
        //////////////////////////////////
        //  variables
        //////////////////////////////////
        
        //DOM cache
        var cnv = null,
            ctx = null,
            canvas_w = null,
            canvas_h = null,
            
            template = null,
            lifeCounter = null,
            heartIcon = null,
            
            
        //instances cache
            col_arr = [],
            bird = null,
            game = null,

            frame_divisor = 200,
            frame_count = 0,
            raf = null,
        
        //ui
            pressed = false;
            
            

        //////////////////////////////////
        //  events 
        ////////////////////////////////// 
        
        function fireEvents(){
            
            document.onkeydown = function(e){
                if(e.keyCode == 32 && !pressed && game.started) {//bar space
                    bird.jump();
                    pressed = true;
                }
                else{
                    if(e.keyCode == 32 && !pressed && !game.started && !game.gameOver()){
                        game.start();
                        raf = requestAnimationFrame(render);
                    }
                    else if(e.keyCode == 32 && !pressed && !game.started && game.gameOver()){
                        location.reload(); 
                    }
                } 
            }
        
            document.onkeyup = function(e){
                pressed = false;
            }
        
            cnv.onclick = function(e){
                if(game.started){ 
                    bird.jump()
                }
                else{
                    if(game.gameOver()){
                        location.reload();
                    }
                    else{
                        game.start(); 
                        raf = requestAnimationFrame(render);
                    }
                    
                }
            }
            
        }
        
        //////////////////////////////////
        //  functions 
        //////////////////////////////////
        
        function setStageSize(){
            cnv.width = global.config.getCnvWidth();
            cnv.height = global.config.getCnvHeight();
            template.style.width = global.config.getTemplateWidth() + "px";
            template.style.height = global.config.getTemplmateHeight() + "px";
        }
            
        
        function check_colision(){
            for(var i = col_arr.length - 1; i > -1; i--){
                if(bird.x + bird.radius >= col_arr[i].x &&
                   bird.x + bird.radius <= col_arr[i].x + col_arr[i].col_w
                   ){
                    if(bird.y - bird.radius <= col_arr[i].gap_top ||
                       bird.y + bird.radius >= col_arr[i].gap_top + col_arr[i].gap_h){
                        return true;
                        
                    }
                }
            }
        }
        
                
        function setConfigOnDB(){
            if (!localStorage.getItem("config")){
                localStorage.setItem("config", "{}");
                global.db.create("gravity", global.config.getGravity());
            }
            else{
                global.config.setGravity(parseFloat(global.db.read("gravity")));
            }
        }
        
        function uiLifesUpdate(){
            if(game.lifes != -1){lifeCounter.innerHTML = game.lifes + heartIcon.outerHTML}
            else{lifeCounter.innerHTML = 0 + heartIcon.outerHTML}
        }
        
                

        //////////////////////////////////
        //  rendering
        //////////////////////////////////
        function render(){
            frame_count++;

            ctx.clearRect(0,0,canvas_w,canvas_h);
            
            //render bird
            bird.draw(ctx);
            bird.move();
   
            //render columns
            for(var i = col_arr.length - 1; i > -1; i--){
                col_arr[i].draw(ctx);
                col_arr[i].move();
            }
            
            //new column
            if(frame_count % frame_divisor == 0){
                col_arr.push(global.model.Columns(ctx));
                frame_divisor = __.random(160, 200);
                frame_count = 0;
            }

            //delete column
            if(col_arr[0].x < -col_arr[0].col_w){
                col_arr.shift();
            }

            //check up for off limits
            bird.bounce_off(); 
            
            //check up for collision with columns
            if(!game.collided && check_colision()){
                game.collided = true;
                bird.color = "green";
                game.reduceLife();
                setTimeout(function(){
                    bird.color = "blue";
                    game.collided = false;
                },1500);
            };
            
            //update life's counter
            uiLifesUpdate();
            
            //game over?
            if(!game.gameOver() && game.started){
                requestAnimationFrame(render);
            }
            else if(game.gameOver() && game.started){
                game.end();
                cancelAnimationFrame(raf);
            } 
            
               
        }   
        
        
        //////////////////////////////////
        //  init
        //////////////////////////////////
        document.addEventListener("DOMContentLoaded", function(){
            /* to keep this order is important*/
            
            //set variables on the controller so the rendering method does not
            //have to go and get them every time is rendered
            cnv = global.config.getCnv();
            ctx = global.config.getContext();
            canvas_w = global.config.getCnvWidth();
            canvas_h = global.config.getCnvHeight();
            template = global.config.getTemplate();
            lifeCounter = global.config.getLifeCounter();
            heartIcon = global.config.getHeartIcon();
            
            //instances
            bird = global.model.Bird(ctx);
            col_arr.push(global.model.Columns(ctx));
            game = global.model.Game();
            
            //set stage size
            setStageSize();
            
            //first rendering
            render();
            
            
            //check db and retrieve custimized config if there is any
            setConfigOnDB();
            
                        
            //show popup before starting
            game.showPromptStart();
            
            //fire events
            fireEvents();
            
            
        });
        
                
    
    })();
    
    global.controller = controller;
    window.madball = global;
    
    

})(window.madball || {}, window.__);

