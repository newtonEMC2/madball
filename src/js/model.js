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
        
        var Game = {
            collided: false,
            started: false,
            lifes: global.config.getLifes(),
            clock: global.config.getClock(),
            setInterval: null,
            d: 0,
            s: 0,
            m: 0,
            prompt_start: global.config.getPromptStart(),
            prompt_end: global.config.getPromptEnd(),
            
            reduceLife: function(){
                this.lifes--;
            },
            
            gameOver: function(){
                return (this.lifes < 0) ? true : false;
            },
            
            start: function(){
                this.started = true;
                this._hidePromptStart();
                this._startClock();
            },
            
            showPromptStart: function(){
                this.prompt_start.classList.remove("is-hidden");
            },
            
            _hidePromptStart: function(){
                this.prompt_start.classList.add("is-hidden");
            },
            
            _showPromptEnd: function(){
                this.prompt_end.classList.remove("is-hidden");
            },
            
            end: function(){
                this.started = false;
                this._stopClock();
                this._showPromptEnd();
            },
            
            _startClock: function(){
                var _this = this;
                _this.setInterval = setInterval(function(){
                    _this.d++;
                    if(_this.d > 9){_this.d = 0; _this.s++}
                    if(_this.s > 59){_this.s = 0; _this.m++}
                    _this.clock.innerHTML = "" + _this.m + ((_this.s > 9) ? ":" : ":0") + _this.s + ":" + _this.d;
                    
                }, 100)
            },
            
            _stopClock: function(){
                clearInterval(this.setInterval);
            }
        }
        
        
        return{
            Bird: function(ctx){return new Bird(ctx)},
            Columns: function(ctx){return new Columns(ctx)},
            Game: function(){return Game}
        }
        
        
        
    })()
    
    
    global.model = model;
    window.madball = global;


})(window.madball || {}, window.__);
    

    
    


