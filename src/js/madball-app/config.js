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
        var cnv = document.getElementsByClassName("canvas")[0],
            ctx = cnv.getContext('2d'),
            canvas_w = setStageSize(),
            canvas_h = Math.floor(canvas_w / resolution_factor),
            
            template = document.getElementsByClassName("template")[0],
            template_w = canvas_w,
            template_h = canvas_h,
            
            lifeCouter = document.getElementsByClassName("template__info-lifes")[0],
            clock = document.getElementsByClassName("template__info-clock")[0],
            
            heartIcon = document.getElementsByClassName("template__icon-heart")[0],
            fullscreenIcon = document.getElementsByClassName("template__icon-fullscreen")[0],
            minimizeIcon = document.getElementsByClassName("template__icon-minimize")[0],
            
            prompt_start = document.getElementsByClassName("template__prompt-start")[0],
            prompt_end = document.getElementsByClassName("template__prompt-end")[0],
        
            overlay = document.getElementsByClassName("template__overlay")[0];
        
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
        
        function getTemplate(){
            return template;
        }
        
        function getTemplateWidth(){
            return template_w;
        }
        
        function getTemplateHeight(){
            return template_h;
        }
        
        function getLifeCounter(){
            return lifeCouter;
        }
        
        function getHeartIcon(){
            return heartIcon;
        }
        
        function getMinimizeIcon(){
            return minimizeIcon;
        }
        
        function getFullscreenIcon(){
            return fullscreenIcon;
        }
        
        function getClock(){
            return clock;
        }
        
        function getPromptStart(){
            return prompt_start;
        }
        
        function getPromptEnd(){
            return prompt_end;
        }
        
        function getOverlay(){
            return overlay;
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
            getTemplate: getTemplate,
            getTemplateWidth: getTemplateWidth,
            getTemplmateHeight: getTemplateHeight,
            getLifeCounter: getLifeCounter,
            getHeartIcon: getHeartIcon,
            getMinimizeIcon: getMinimizeIcon,
            getFullscreenIcon: getFullscreenIcon,
            getClock: getClock,
            getPromptStart: getPromptStart,
            getPromptEnd: getPromptEnd,
            getOverlay: getOverlay,
            
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