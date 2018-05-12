;(function(global, __){
    
    "use strict";

    var model = (function(){
    
        function _Bird(ctx){
            
            this.canvas_h = global.controller.canvas_h,
            this.x = global.controller.canvas_w / 2,
            this.y = global.controller.canvas_h / 2,
            this.dx = 0,
            this.dy = 0,
            this.g = .1,
            this.radius = 15,

            this.draw = function(){
                ctx.beginPath();
                ctx.arc(this.x,this.y,this.radius,0,2*Math.PI);
                ctx.fillStyle = 'green';
                ctx.fill();
            }, 

            this.move = function(){
                this.dy += this.g;
                this.y = this.y + this.dy;
            },

            this.jump = function(){
                this.dy += -4  ;
            }

            this.bounce_off = function(){
                if(this.y < this.radius){//top
                    this.dy = 7;
                }
                else if(this.y > this.canvas_h - this.radius){//bottom
                    this.dy = -7;  
                }
            }
        }

        function _Columns(ctx){

            this.x = global.controller.canvas_w,
            this.col_w = 20;
            this.top_section = __.random(global.controller.canvas_h*.2,global.controller.canvas_h*.7),
            this.gap = __.random(global.controller.canvas_h*.15,global.controller.canvas_h*.30),

            this.draw = function(){
                ctx.rect(this.x, 0, this.col_w, this.top_section);
                ctx.rect(this.x, this.top_section + this.gap, this.col_w, global.controller.canvas_h);
                ctx.fillStyle = "blue";
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


})(window.madball || {}, window.__)
    

    
    


