;(function(global){
    
    "use strict";
    
    var config = (function(){
        
        //////////////////////////////////
        //  variables  
        //////////////////////////////////
        
        //DOM cache
        var cnv = document.getElementsByClassName("canvas")[0],
            ctx = cnv.getContext('2d'),
            canvas_w = 318,
            canvas_h = 407,
            
            canvasWrapper = document.getElementsByClassName("canvasWrapper")[0],
            canvasWrapper_w = canvas_w,
            canvasWrapper_h = canvas_h,
            
            app = document.getElementById("app-template"),
            app_w = canvasWrapper_w,
                        
            lifeCouter = document.getElementsByClassName("canvasWrapper__info-lifes")[0],
            clock = document.getElementsByClassName("canvasWrapper__info-clock")[0],
            
            heartIcon = document.getElementsByClassName("icon-heart")[0],
            fullscreenIcon = document.getElementsByClassName("icon-fullscreen")[0],
            minimizeIcon = document.getElementsByClassName("icon-minimize")[0],
            
            prompt_start = document.getElementsByClassName("canvasWrapper__prompt-start")[0],
            prompt_end = document.getElementsByClassName("canvasWrapper__prompt-end")[0],
        
            overlay = document.getElementsByClassName("canvasWrapper__overlay")[0];
        
        //ball
        var ball_radius = 15,
            ball_color = "blue",
            gravity = .1,
            initial_position_X = canvas_w / 2,
            initial_position_Y = canvas_h / 2;
        
        //column
        var columns_color = "white",
            col_w = 20,
            gap_top_min = 0,
            gap_top_max = .65,
            gap_h_min = .20,
            gap_h_max = .35;
        
        //game
        var lifes = 2;
        
        
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
        
        function getCanvasWrapper(){
            return canvasWrapper;
        }
        
        function getCanvasWrapperWidth(){
            return canvasWrapper_w;
        }
        
        function getCanvasWrapperHeight(){
            return canvasWrapper_h;
        }
        
        function getApp(){
            return app;
        }
        
        function getAppWidth(){
            return app_w;
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
            getCanvasWrapper: getCanvasWrapper,
            getCanvasWrapperWidth: getCanvasWrapperWidth,
            getCanvasWrapperHeight: getCanvasWrapperHeight,
            getApp: getApp,
            getAppWidth: getAppWidth,
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