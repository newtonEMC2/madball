;(function(global){
    
    "use strict";
    
    var config = (function(){
        
        //////////////////////////////////
        //  variables  
        //////////////////////////////////
        
        //DOM cache
        var cnv = document.getElementsByClassName("app__canvasWrapper-canvas")[0],
            ctx = cnv.getContext('2d'),
            canvas_w = 318,
            canvas_h = 407,
            
            canvasWrapper = document.getElementsByClassName("app__canvasWrapper")[0],
            canvasWrapper_w = canvas_w,
            canvasWrapper_h = canvas_h,
            
            panel = document.getElementsByClassName("app__panel")[0],
            panel_h = 40,
            
            app = document.getElementsByClassName("app")[0],
            app_w = canvasWrapper_w,
            app_h = panel_h + canvasWrapper_h,
                        
            lifeCouter = document.getElementsByClassName("app__canvasWrapper-info-lifes")[0],
            clock = document.getElementsByClassName("app__canvasWrapper-info-clock")[0],
            clockActualTime = document.getElementsByClassName("app__canvasWrapper-info-clock-actual")[0],
            clockBestTime = document.getElementsByClassName("app__canvasWrapper-info-clock-best")[0],
            
            heartIcon = document.getElementsByClassName("icon-heart")[0],
            fullscreenIcon = document.getElementsByClassName("icon-fullscreen")[0],
            minimizeIcon = document.getElementsByClassName("icon-minimize")[0],
            medalIcon = document.getElementsByClassName("icon-medal")[0],
            restartIcon = document.getElementsByClassName("icon-restart")[0],
            configIcon = document.getElementsByClassName("icon-config")[0],
            closeIcon = document.getElementsByClassName("icon-close")[0],
            
            prompt_start = document.getElementsByClassName("app__canvasWrapper-prompt-start")[0],
            prompt_end = document.getElementsByClassName("app__canvasWrapper-prompt-end")[0],
        
            overlay = document.getElementsByClassName("app__overlay")[0],
        
            configPopup = document.getElementsByClassName("app__popup-config")[0];
        
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
        
        //db
        var db_name = "madballDB",
            db_results_key = "results",
            db_config_key = "config",
            db_results_size = "10";
        
        
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
        
        function getAppHeight(){
            return app_h;
        }
        
        function getPanel(){
            return panel;
        }
        
        function getPanelHeight(){
            return panel_h;
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
        
        function getMedalIcon(){
            return medalIcon;
        }
        
        function getRestartIcon(){
            return restartIcon;
        }
        
        function getConfigIcon(){
            return configIcon;
        }
        
        function getCloseIcon(){
            return closeIcon;
        }
        
        function getClock(){
            return clock;
        }
        
        function getClockActualTime(){
            return clockActualTime;
        }
        
        function getClockBestTime(){
            return clockBestTime;
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
        
        function getConfigPopup(){
            return configPopup;
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
        
        //db
        
        function GetDbName(){
            return db_name;
        }
        
        function getDbResultsKey(){
            return db_results_key;
        }
        
        function getDbConfigKey(){
            return db_config_key;
        }
        
        function getDbResultsSize(){
            return db_results_size;
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
            getAppHeight: getAppHeight,
            getPanel: getPanel,
            getPanelHeight: getPanelHeight,
            getLifeCounter: getLifeCounter,
            getHeartIcon: getHeartIcon,
            getMinimizeIcon: getMinimizeIcon,
            getFullscreenIcon: getFullscreenIcon,
            getMedalIcon: getMedalIcon,
            getRestartIcon: getRestartIcon,
            getConfigIcon: getConfigIcon,
            getCloseIcon: getCloseIcon,
            getClock: getClock,
            getClockActualTime: getClockActualTime,
            getClockBestTime: getClockBestTime,
            getPromptStart: getPromptStart,
            getPromptEnd: getPromptEnd,
            getOverlay: getOverlay,
            getConfigPopup: getConfigPopup,
            
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
            
            GetDbName: GetDbName,
            getDbResultsKey: getDbResultsKey,
            getDbConfigKey: getDbConfigKey,
            getDbResultsSize: getDbResultsSize,
            
            
            //setters
            setGravity: setGravity,
            setBallColor: setBallColor,
            setColumnsColor: setColumnsColor
        }
        
        
    })()

    
    
    
    global.config = config;
    window.madball = global;

})(window.madball || {});