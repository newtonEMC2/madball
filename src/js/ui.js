;(function(global){
    
    "use strict";
    
    var ui = (function(){
        
        //DOM cache
        var nav = document.getElementsByClassName("pageHeader__nav")[0],
            menu_toggle = document.getElementsByClassName("pageHeader__toggle")[0],
            footer = document.getElementsByClassName("footer")[0],
            header = document.getElementsByClassName("pageHeader")[0],
            body = document.getElementsByTagName("body")[0],
            resultsItems = document.getElementsByClassName("results__list-item-time"),
            results = document.getElementsByClassName("results")[0],
            about = document.getElementsByClassName("about")[0],
            sectionApp = document.getElementsByClassName("section-app")[0],
            aux_c = document.getElementsByClassName("aux-c")[0],
            
            fullscreenIcon = document.getElementsByClassName("icon-fullscreen")[0];
        
        //aux variables
        var db_json = null,
            //resultsTop_h = null,
            //aboutTop_h = null,
            pageHeader_offsetHeight = null,
            footer_offsetTop = null,
            mq = null;
        
        //other variables
        var mq_large = "1050px"; //config .scss has a reference to it
        
        
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
        
        function stickyFooter(){
            footer.classList.remove("is-sticky");
            if(footer.offsetTop + footer.offsetHeight < window.innerHeight){
                footer.classList.add("is-sticky");
            }
        }       
        
        function fillResultsUp(){
            db_json = JSON.parse(localStorage.getItem("madballDB"));
            db_json = db_json.results.sort().reverse();
            
            for(var i = 0; i < resultsItems.length; i++){
                if(!db_json[i]){
                    resultsItems[i].innerHTML = "...";
                }else{
                    resultsItems[i].innerHTML = db_json[i];
                } 
            }
        }
        
        function setStage(){
            
            mq = window.matchMedia( "(min-width: " + mq_large + ")" );
            if(!mq.matches){
               
                sectionApp.removeAttribute("style");
                results.removeAttribute("style");
                about.removeAttribute("style");
                return false;
            }
            
            pageHeader_offsetHeight = header.offsetHeight;
            footer_offsetTop = footer.offsetTop;
            
            sectionApp.style.height = footer_offsetTop - pageHeader_offsetHeight + "px";
            sectionApp.style.top = footer_offsetTop;
            results.style.minHeight = window.innerHeight - pageHeader_offsetHeight + "px";
            about.style.minHeight = 100 + "vh";
            
        }
        
        
        //fire events
        
        menu_toggle.addEventListener("click", togglePhoneNav);
        
        fullscreenIcon.addEventListener("click", menuFolding); 
        
        window.addEventListener("resize", function(){
            stickyFooter();
            setStage();
            
        })
        
        document.addEventListener("DOMContentLoaded", function(){
            stickyFooter();
            fillResultsUp();
            setStage();
        });
        
        
        
              
    })()
        
    
    
    global.ui = ui;
    
})(window);