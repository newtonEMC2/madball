
    
function Bird(ctx){

    this.x = canvas_w / 2,
    this.y = canvas_h / 2,
    this.dx = 0,
    this.dy = 0,
    this.g = .1,
    this.radius = 15,

    this.draw = function(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,2*Math.PI);
        ctx.fillStyle = "green";
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
        else if(this.y > canvas_h - this.radius){//bottom
            this.dy = -7;  
        }
    }
    
}

function Columns(ctx){
    
    this.x = canvas_w,
    this.col_w = 20;
    this.top_section = __.random(canvas_h*.2,canvas_h*.7),
    this.gap = __.random(canvas_h*.15,canvas_h*.30),
    
    this.draw = function(){
        ctx.rect(this.x, 0, this.col_w, this.top_section);
        ctx.rect(this.x, this.top_section + this.gap, this.col_w, canvas_h);
        ctx.fillStyle = "white";
        ctx.fill();
    }
    
    this.move = function(){
        this.x--;
    }
    
    this.collision = function(){
        
    }
}
    
    


