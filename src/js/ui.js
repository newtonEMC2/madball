;(function(global){
    
    "use strict";
    
    var ui = (function(){
        
        //DOM cache
        var nav = document.getElementsByClassName("pageHeader__nav")[0],
            tab_results = document.getElementsByClassName("tab__results")[0],
            tab_about = document.getElementsByClassName("tab__about")[0],
            tab_play = document.getElementsByClassName("tab__play")[0],
            menu_toggle = document.getElementsByClassName("pageHeader__toggle")[0],
            footer = document.getElementsByClassName("footer")[0],
            header = document.getElementsByClassName("pageHeader")[0],
            body = document.getElementsByTagName("body")[0],
            resultsItems = document.getElementsByClassName("results__list-item-time"),
            results = document.getElementsByClassName("results")[0],
            about = document.getElementsByClassName("about")[0],
            sectionApp = document.getElementsByClassName("section-app")[0],
            special_wrapper_app = document.getElementsByClassName("special__wrapper-app")[0],
            special_wrapper_header = document.getElementsByClassName("special__wrapper-header")[0],
            
            fullscreenIcon = document.getElementsByClassName("icon-fullscreen")[0];
        
        //aux variables
        var db_json = null,
            resultsTop_h = null,
            aboutTop_h = null,
            pageHeader_offsetHeight = null,
            footer_offsetTop = null,
            mq = null,
            offsetTops = {
                "tab__play": 0,
                "tab__results": null,
                "tab__about": null
            };
        
        
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
            
            special_wrapper_header.style.height = header.offsetHeight + "px";
                        
            mq = window.matchMedia( "(min-width: " + mq_large + ")" );
            if(!mq.matches){
               
                special_wrapper_app.removeAttribute("style");
                results.removeAttribute("style");
                about.removeAttribute("style");
                sectionApp.removeAttribute("style");
                
            }else{
            
                pageHeader_offsetHeight = header.offsetHeight;
                footer_offsetTop = footer.offsetTop;


                results.style.minHeight = window.innerHeight - pageHeader_offsetHeight + "px";
                about.style.minHeight = 100 + "vh";
                special_wrapper_app.style.height = results.offsetHeight + about.offsetHeight + "px";
                sectionApp.style.height = window.innerHeight - pageHeader_offsetHeight + "px";
            }
        }
        
        function scrollTo(e){
            pageHeader_offsetHeight = header.offsetHeight;
            resultsTop_h = results.offsetTop;
            aboutTop_h = about.offsetTop;
            offsetTops.tab__results = resultsTop_h - pageHeader_offsetHeight;
            offsetTops.tab__about = aboutTop_h - pageHeader_offsetHeight;
            var array = e.target.classList;
            for(var i = 0; i < array.length; i++){
                for(var att in offsetTops){
                    if(att === array[i]){
                        window.scrollTo(0, offsetTops[att]);
                        console.log(offsetTops[att]);
                    }
                }
            }
        }
        
        
        //fire events
        
        menu_toggle.addEventListener("click", togglePhoneNav);
        
        fullscreenIcon.addEventListener("click", menuFolding); 
        
        tab_results.addEventListener("click", function(e){
            scrollTo(e);
            togglePhoneNav();
        });
                
        tab_about.addEventListener("click", function(e){
            scrollTo(e);
            togglePhoneNav();
        });
        
        tab_play.addEventListener("click", function(e){
            scrollTo(e);
            togglePhoneNav();
        });
        
        window.addEventListener("resize", function(){
            
            setStage();
            stickyFooter();
        });
        
        document.addEventListener("DOMContentLoaded", function(){
            fillResultsUp();
            
            setStage();
            stickyFooter();
        });
        
        
        
              
    })()
        
    
    
    global.ui = ui;
    
})(window);