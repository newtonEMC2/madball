;(function(global, __){
    
    "use strict";

    var model = (function(){
    
        function _Bird(ctx){
            
            this.canvas_h = global.config.getCnvHeight(),
            this.x = global.config.Xo,
            this.y = global.config.Yo,
            this.dx = 0,
            this.dy = 0,
            this.g = global.config.getGravity(),
            this.radius = global.config.ball_radius,
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
                this.dy = -4  ;
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
            this.col_w = 20;
            this.top_section = __.random(this.canvas_h*.2, this.canvas_h*.7),
            this.gap = __.random(this.canvas_h*.15, this.canvas_h*.30),
            this.color = global.config.getColumnsColor(),

            this.draw = function(ctx){
                ctx.rect(this.x, 0, this.col_w, this.top_section);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.rect(this.x, this.top_section + this.gap, this.col_w, this.canvas_h);
                ctx.fillStyle = this.color;
                ctx.fill();
                
            }

            this.move = function(){
                this.x--;
            }

            this.collision = function(){

            }
        }
        
        
        return{
            Bird: function(ctx){return new _Bird(ctx)},
            Columns: function(ctx){return new _Columns(ctx)}
        }
    
    
    
    })()
    
    
    
    
    
    global.model = model;
    window.madball = global;


})(window.madball || {}, window.__);
    

    
    


