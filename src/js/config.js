;(function(global){
    
    "use strict";
    
    var config = (function(){
        
        //////////////////////////////////
        //  variables  
        //////////////////////////////////
        
        //screen sizes
        var phone_screen = 461,
            tablet_screen = 721,
            resolution_factor = 0.78;
        
        //stage
        var w_for_phone = 318,
            w_for_tablet = 455,
            w_for_desktop = 680,
            
            w_basis_factor = 350;
                
        //DOM cache
        var cnv = document.getElementById("canvas"),
            ctx = cnv.getContext('2d'),
            canvas_w = setStageSize(),
            canvas_h = canvas_w / resolution_factor,
        
            lifeCouter = document.getElementsByClassName("infoPanel__lifes")[0];
        
        //ball
        var ball_radius = 15,
            ball_color = "blue",
            gravity = .1,
            initial_position_X = canvas_w / 2,
            initial_position_Y = canvas_h / 2;
        
        //column
        var columns_color = "white",
            col_w = 20;
        
        //game
        var lifes = 2;
        
        
        //////////////////////////////////
        //  functions 
        //////////////////////////////////
        
        function setStageSize(){
            if(window.matchMedia( "(min-width: " + tablet_screen + "px )" ).matches){
                return w_for_desktop;
            }
            else if(window.matchMedia( "(min-width: " + phone_screen + "px )" ).matches){
                return w_for_tablet;
            }
            else{
                return w_for_phone;
            }
        }
        
        function setBallRadius(){
            if(window.matchMedia( "(min-width: " + tablet_screen + "px )" ).matches){
                console.log("desktop");
                return w_for_desktop;
            }
            else if(window.matchMedia( "(min-width: " + phone_screen + "px )" ).matches){
                console.log("tablet");
                return w_for_tablet;
            }
            else{
                console.log("phone");
                return w_for_phone;
            }
        }
        
        
        //////////////////////////////////
        //  getters 
        //////////////////////////////////
        
        //DOM
        
        function getCnv(){
            return cnv;
        }
        
        function getContext(){
            return ctx;
        }
        
        function getCnvWidth(){
            return canvas_w;
        }
        
        function getCnvHeight(){
            return canvas_h;
        }
        
        function getLifeCounter(){
            return lifeCouter;
        }
        
        //ball
        
        function getBallRadius(){
            return ball_radius;
        }
        
        function getBallColor(){
            return ball_color;
        }
        
        function getGravity(){
            return gravity;
        }
        
        function getXo(){
            return initial_position_X;
        }
        
        function getYo(){
            return initial_position_Y;
        }
        
        //Columns
        
        function getColumnsColor(){
            return columns_color;
        }
        
        function getColumnsWidth(){
            return col_w;
        }
        
        //game
        
        function getLifes(){
            return lifes;
        }
        
        //////////////////////////////////
        //  setters
        //////////////////////////////////
        
        function setGravity(val){
            gravity = val;
        }
        
        function setBallColor(color){
            ball_color = color;
        }
        
        
        //////////////////////////////////
        //  return visible elements
        //////////////////////////////////
        return {
            //getters
            getCnv: getCnv,
            getContext: getContext,
            getCnvHeight: getCnvHeight,
            getCnvWidth: getCnvWidth,
            getLifeCounter: getLifeCounter,
            
            getXo: getXo,
            getYo: getYo,
            getBallRadius: getBallRadius,
            getBallColor: getBallColor,
            getGravity: getGravity,
            
            getColumnsColor: getColumnsColor,
            getColumnsWidth: getColumnsWidth,
            
            getLifes: getLifes,
            
            
            //setters
            setGravity: setGravity
        }
        
        
    })()

    
    
    
    global.config = config;
    window.madball = global;

})(window.madball || {});