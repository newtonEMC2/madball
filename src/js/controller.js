;(function(global, __){
    
    "use strict";
    
    var controller = (function(){
        
        //////////////////////////////////
        //  variables
        //////////////////////////////////
        
        //DOM cache
        var ctx = null,
            canvas_w = null,
            canvas_h = null,
            
            lifeCounter = null,
            
            //instances cache
            col_arr = [],
            bird = null,
            game = null,

            frame_divisor = 200,
            frame_count = 0,
            raf = null,

            pressed = false,
            collided = false;

        //////////////////////////////////
        //  events 
        ////////////////////////////////// 
        document.onkeydown = function(e){
            if(e.keyCode == 32 && !pressed) {
                bird.jump();
                pressed = true;
            }
        }
        
        document.onkeyup = function(e){
            pressed = false;
        }
        
        
        
        //////////////////////////////////
        //  functions 
        //////////////////////////////////
        function check_colision(){
            for(var i = col_arr.length - 1; i > -1; i--){
                if(bird.x + bird.radius >= col_arr[i].x &&
                   bird.x + bird.radius <= col_arr[i].x + col_arr[i].col_w
                   ){
                    if(bird.y - bird.radius <= col_arr[i].top_section ||
                       bird.y + bird.radius >= col_arr[i].top_section + col_arr[i].gap){
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
            if(game.lifes != -1){lifeCounter.innerHTML = game.lifes}
            else{lifeCounter.innerHTML = 0}
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
            if(!collided && check_colision()){
                collided = true;
                bird.color = "green";
                game.reduceLife();
                setTimeout(function(){
                    bird.color = "blue";
                    collided = false;
                },1500);
            };
            
            //update life's counter
            uiLifesUpdate();
            
            //game over?
            if(!game.gameOver()){
                requestAnimationFrame(render);
            }else{
                cancelAnimationFrame(raf);
            } 
            
               
        }   
        
        
        //////////////////////////////////
        //  init
        //////////////////////////////////
        window.onload = function(){
            /* to keep this order is important*/
            
            //set variables on the controller so the rendering method does not
            //have to go and get them every time is rendered
            ctx = global.config.getContext();
            canvas_w = global.config.getCnvWidth();
            canvas_h = global.config.getCnvHeight();
            lifeCounter = global.config.getLifeCounter();
            
            //ui
            
            
            //check db and retrieve custimized config if there is any
            setConfigOnDB();
            
            //instances
            
            bird = global.model.Bird(ctx);
            col_arr.push(global.model.Columns(ctx));
            game = global.model.Game();
                        
            //start rendering
            raf = requestAnimationFrame(render);
        }
        
                
    
    })();
    
    global.controller = controller;
    window.madball = global;
    
    

})(window.madball || {}, window.__);

