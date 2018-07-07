;(function(global){
    
    "use strict";
    
    var ui = (function(){
        
        //DOM 
        var nav = document.getElementsByClassName("pageHeader__nav")[0],
            tab_results = document.getElementsByClassName("tab__results")[0],
            tab_about = document.getElementsByClassName("tab__about")[0],
            tab_play = document.getElementsByClassName("tab__play")[0],
            tabs = document.getElementsByClassName("pageHeader__nav-tab"),
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
            sWrapperAppTop_h = null,
            resultsTop_h = null,
            aboutTop_h = null,
            footerTop_h = null,
            header_offsetHeight = null,
            footer_offsetHeight = null,
            mq = null,
            offsetTops = {
                "tab__play": 0,
                "tab__results": null,
                "tab__about": null
            };
        
        
        //other variables
        var mq_large = "1050px", //config .scss has a reference to it
            mq_medium = "650px"; //config .scss has a reference to it
            
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
        
        function tabHighlighting(){
            
            mq = window.matchMedia( "(min-width: " + mq_medium + ")" );
            if(mq.matches){
                return false;
            }
            
            resultsTop_h = results.offsetTop;
            aboutTop_h = about.offsetTop;
            header_offsetHeight = header.offsetHeight;
            
            for(var i = 0; i < tabs.length; i++){
                tabs[i].classList.remove("is-selected");
            }
            
            if(window.pageYOffset >= 0 &&
               window.pageYOffset < resultsTop_h - header_offsetHeight){
                tab_play.classList.add("is-selected");
            }
            else if(window.pageYOffset >= resultsTop_h - header_offsetHeight &&
               window.pageYOffset < aboutTop_h - header_offsetHeight){
                tab_results.classList.add("is-selected");
            }
            else{
                tab_about.classList.add("is-selected");
            }
        }
        
        function menuFolding(){
            nav.classList.remove("is-phone-nav-active");
            menu_toggle.classList.remove("is-toggle-nav-active");
        }
        
        function stickyFooter(){
            footer.classList.remove("is-sticky");
            if(footer.offsetTop + footer_offsetHeight < window.innerHeight){
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
            
                header_offsetHeight = header.offsetHeight;
                footerTop_h = footer.offsetTop;

                results.style.minHeight = window.innerHeight - header_offsetHeight + "px";
                about.style.minHeight = 100 + "vh";
                special_wrapper_app.style.height = results.offsetHeight + about.offsetHeight + "px";
                sectionApp.style.height = window.innerHeight - header_offsetHeight + "px";
            }
        }
        
        function scrollTo(e){
            
            resultsTop_h = results.offsetTop;
            aboutTop_h = about.offsetTop;
            header_offsetHeight = header.offsetHeight;
            
            offsetTops.tab__results = resultsTop_h - header_offsetHeight;
            offsetTops.tab__about = aboutTop_h - header_offsetHeight;
            
            var array = e.target.classList;
            
            for(var i = 0; i < array.length; i++){
                for(var att in offsetTops){
                    if(att === array[i]){
                        window.scrollTo(0, offsetTops[att]);
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
            tabHighlighting();
        });
                
        tab_about.addEventListener("click", function(e){
            scrollTo(e);
            togglePhoneNav();
            tabHighlighting();
        });
        
        tab_play.addEventListener("click", function(e){
            scrollTo(e);
            togglePhoneNav();
            tabHighlighting();
        });
        
        window.addEventListener("scroll", function(){
            tabHighlighting();
        })
                                
        window.addEventListener("resize", function(){
            setStage();
            stickyFooter();
            tabHighlighting();
        });
        
        document.addEventListener("DOMContentLoaded", function(){
            setStage();
            fillResultsUp();
            stickyFooter();
            tabHighlighting();
        });
        
        
        
              
    })()
        
    
    
    global.ui = ui;
    
})(window);