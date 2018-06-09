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
            
            w_basis_factor = 340;
                
        //DOM cache
        var cnv = document.getElementById("canvas"),
            ctx = cnv.getContext('2d'),
            canvas_w = setStageSize(),
            canvas_h = canvas_w / resolution_factor,
        
            lifeCouter = document.getElementsByClassName("infoPanel__lifes")[0],
        
            prompt_start = document.getElementsByClassName("template__prompt-start")[0];
        
        //ball
        var ball_radius = 15 * canvas_w / w_basis_factor,
            ball_color = "blue",
            gravity = .1,
            initial_position_X = canvas_w / 2,
            initial_position_Y = canvas_h / 2;
        
        //column
        var columns_color = "white",
            col_w = 20 * canvas_w / w_basis_factor,
            gap_top_min = 0,
            gap_top_max = .65,
            gap_h_min = .20,
            gap_h_max = .35;
        
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
        
        function getPromptStart(){
            return prompt_start;
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
        
        function getGapTopMin(){
            return gap_top_min;
        }
        
        function getGapTopMax(){
            return gap_top_max;
        }
        
        function getGapHeightMin(){
            return gap_h_min;
        }
        
        function getGapHeightMax(){
            return gap_h_max;
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
        
        //set colors
        
        function setBallColor(color){
            ball_color = color;
        }
        
        function setColumnsColor(color){
            columns_color = color;   
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
            getPromptStart: getPromptStart,
            
            getXo: getXo,
            getYo: getYo,
            getBallRadius: getBallRadius,
            getBallColor: getBallColor,
            getGravity: getGravity,
            
            getColumnsColor: getColumnsColor,
            getColumnsWidth: getColumnsWidth,
            getGapTopMin: getGapTopMin,
            getGapTopMax: getGapTopMax,
            getGapHeightMin: getGapHeightMin,
            getGapHeightMax: getGapHeightMax,
            
            getLifes: getLifes,
            
            
            //setters
            setGravity: setGravity,
            setBallColor: setBallColor,
            setColumnsColor: setColumnsColor
        }
        
        
    })()

    
    
    
    global.config = config;
    window.madball = global;

})(window.madball || {});