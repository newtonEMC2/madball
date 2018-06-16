;(function(global, __){
    
    "use strict";

    var model = (function(){
    
        function Bird(ctx){
            
            this.canvas_h = global.config.getCnvHeight(),
            this.x = global.config.getXo(),
            this.y = global.config.getYo(),
            this.dx = 0,
            this.dy = 0,
            this.g = global.config.getGravity(),
            this.radius = global.config.getBallRadius(),
            this.color = global.config.getBallColor(),

            this.draw = function(ctx){
                ctx.beginPath();
                ctx.arc(this.x,this.y,this.radius,0,2*Math.PI);
                ctx.fillStyle = this.color;
                ctx.fill();
            }, 

            this.move = function(){
                this.dy += this.g;
                this.y = this.y + this.dy;
            },

            this.jump = function(){
                this.dy = -4;
            }

            this.bounce_off = function(){
                if(this.y < this.radius){//top
                    this.dy = 5;
                }
                else if(this.y > this.canvas_h - this.radius){//bottom
                    this.dy = -5;  
                }
            }
        }

        function Columns(ctx){
            this.canvas_h = global.config.getCnvHeight(),
            this.x = global.config.getCnvWidth(),
            this.col_w = global.config.getColumnsWidth(),
            this.gap_top = __.random(this.canvas_h * global.config.getGapTopMin(), this.canvas_h * global.config.getGapTopMax()),
            this.gap_h = __.random(this.canvas_h * global.config.getGapHeightMin(), this.canvas_h * global.config.getGapHeightMax()),
            this.color = global.config.getColumnsColor(),
                
            this.draw = function(ctx){
                ctx.beginPath();
                ctx.rect(this.x, 0, this.col_w, this.gap_top);
                ctx.rect(this.x, this.gap_top + this.gap_h, this.col_w, this.canvas_h);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            this.move = function(){
                this.x--;
            }
        }
        
        var Game = function(){
            
            var collided = false,
                started = false,
                lifes = global.config.getLifes(),
                _clock = global.config.getClock(),
                _setInterval = null,
                _d = 0,
                _s = 0,
                _m = 0,
                _prompt_start = global.config.getPromptStart(),
                _prompt_end = global.config.getPromptEnd();
                            
            //getters
            function getStarted(){
                return started;
            }

            function getLifes(){
                return lifes;
            }
            
            function getCollided(){
                return collided;
            }
            
            //setters
            function setCollided(value){
                collided = value;
            }

            //public functions
            function reduceLife(){
                lifes--;
            }

            function gameOver(){
                return (lifes < 0) ? true : false;
            }

            function start(){
                started = true;
                _hidePromptStart();
                _startClock();
            }

            function showPromptStart(){
                _prompt_start.classList.remove("is-hidden");
            }

            //private functions
            function _hidePromptStart(){
                _prompt_start.classList.add("is-hidden");
            }

            function _showPromptEnd(){
                _prompt_end.classList.remove("is-hidden");
            }

            function end(){
                started = false;
                _stopClock();
                _showPromptEnd();
            }
            
            function _startClock(){
                _setInterval = setInterval(function(){
                    _d++;
                    if(_d > 9){_d = 0; _s++}
                    if(_s > 59){_s = 0; _m++}
                    _clock.innerHTML = "" + _m + ((_s > 9) ? ":" : ":0") + _s + ":" + _d;

                }, 100)
            }

            function _stopClock(){
                clearInterval(_setInterval);
            }

            return {
                getStarted: getStarted,
                getLifes: getLifes,
                getCollided: getCollided,
                
                setCollided: setCollided,
                
                reduceLife: reduceLife,
                gameOver: gameOver,
                start: start,
                showPromptStart: showPromptStart,
                end: end
            }
        }
            
        
        
        
        return{
            Bird: function(ctx){return new Bird(ctx)},
            Columns: function(ctx){return new Columns(ctx)},
            Game: function(){return Game()}
        }
        
        
        
    })()
    
    
    global.model = model;
    window.madball = global;


})(window.madball || {}, window.__);
    

    
    

