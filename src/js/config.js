;(function(global){
    
    "use strict";
    
    var config = (function(){
        
        //////////////////////////////////
        //  variables  
        //////////////////////////////////
        
        //DOM
        var cnv = document.getElementById("canvas"),
            ctx = cnv.getContext('2d'),

            canvas_w = cnv.width,
            canvas_h = cnv.height;
        
        //ball
        var ball_radius = 15,
            ball_color = "blue",
            gravity = .1,
            initial_position_X = canvas_w / 2,
            initial_position_Y = canvas_h / 2;
        
        //column
        var columns_color = "white";
        
        
        //////////////////////////////////
        //  getters 
        //////////////////////////////////
        
        function getContext(){
            return ctx;
        }
        
        function getCnvWidth(){
            return canvas_w;
        }
        
        function getCnvHeight(){
            return canvas_h;
        }
        
        function getBallColor(){
            return ball_color;
        }
        
        function getGravity(){
            return gravity;
        }
        
        function getColumnsColor(){
            return columns_color;
        }
        
        //////////////////////////////////
        //  setters
        //////////////////////////////////
        
        function setGravity(val){
            gravity = val;
        }
        
        
        //////////////////////////////////
        //  return visible elements
        //////////////////////////////////
        return {
            //getters
            ball_radius: ball_radius,
            ball_color: ball_color,
            Xo: initial_position_X,
            Yo: initial_position_Y,
            
            getContext: getContext,
            getCnvHeight: getCnvHeight,
            getCnvWidth: getCnvWidth,
            
            getBallColor: getBallColor,
            getGravity: getGravity,
            
            getColumnsColor: getColumnsColor,
            
            
            //setters
            setGravity: setGravity
        }
        
        
    })()

    
    
    
    global.config = config;
    window.madball = global;

})(window.madball || {});