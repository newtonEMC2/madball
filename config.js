;(function(global){
    
    var config = (function(){
        
        //////////////////////////////////
        //  ball
        //////////////////////////////////
        var ballRadius = 15,
            ballColor = "blue",
            gravity = .1,
            initialPositionX = global.controller.canvas_w / 2,
            initialPositionY = global.controller.canvas_h / 2;
        
        
        
        
        
        //////////////////////////////////
        //  columns  
        //////////////////////////////////
        
        return {
            ballRadius: ballRadius,
            ballColor: ballColor,
            gravity: gravity,
            Xo: initialPositionX,
            Yo: initialPositionY
        }
        
        
    })()

    
    
    
    global.config = config;
    window.madball = global;

})(window.madball || {})