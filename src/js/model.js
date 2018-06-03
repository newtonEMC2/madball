;(function(global, __){
    
    "use strict";

    var model = (function(){
    
        function _Bird(ctx){
            
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

        function _Columns(ctx){
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
        
        var _Game = {
            lifes: global.config.getLifes(),
            reduceLife: function(){
                this.lifes--;
            },
            gameOver: function(){
                return (this.lifes < 0) ? true : false;
            }
        }
        
        
        return{
            Bird: function(ctx){return new _Bird(ctx)},
            Columns: function(ctx){return new _Columns(ctx)},
            Game: function(){return _Game}
        }
        
        
        
    })()
    
    
    
    
    
    global.model = model;
    window.madball = global;


})(window.madball || {}, window.__);
    

    
    


