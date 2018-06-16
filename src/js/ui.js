;(function(global){
    
    "use strict";
    
    var ui = (function(){
        
        //DOM cache
        var nav = document.getElementsByClassName("pageHeader__nav")[0],
            menu_toggle = document.getElementsByClassName("pageHeader__toggle")[0],
            fullscreenIcon = document.getElementsByClassName("icon-fullscreen")[0];
        
        //fire events
        
        menu_toggle.addEventListener("click", togglePhoneNav);
        
        fullscreenIcon.addEventListener("click", menuFolding); 
        
        
        
        
        //functions
        function togglePhoneNav(){
            if(nav.classList.contains("is-phone-nav-active")){
                nav.classList.remove("is-phone-nav-active");
                menu_toggle.classList.remove("is-toggle-nav-active");
            }else{
                nav.classList.add("is-phone-nav-active");
                menu_toggle.classList.add("is-toggle-nav-active");
            }
        }
        
        function menuFolding(){
            nav.classList.remove("is-phone-nav-active");
            menu_toggle.classList.remove("is-toggle-nav-active");
        }
              
    })()
        
    
    
    global.ui = ui;
    
})(window);