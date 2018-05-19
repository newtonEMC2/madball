;(function(global){
    
    "use strict";
    
    var config = (function(){
        
        //////////////////////////////////
        //  ball
        //////////////////////////////////
        var ball_radius = 15,
            ball_color = "blue",
            gravity = .1,
            initial_position_X = global.controller.canvas_w / 2,
            initial_position_Y = global.controller.canvas_h / 2;
        
        //getters
        function getGravity(){
            return gravity;
        }
        
        //setters
        function setGravity(val){
            gravity = val;
        }
        
        
        
        //////////////////////////////////
        //  columns  
        //////////////////////////////////
        
        return {
            ball_radius: ball_radius,
            ball_color: ball_color,
            getGravity: getGravity,
            Xo: initial_position_X,
            Yo: initial_position_Y,
            setGravity: setGravity
        }
        
        
    })()

    
    
    
    global.config = config;
    window.madball = global;

})(window.madball || {})