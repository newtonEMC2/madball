;(function(global){
    
    "use strict";
    
    var ui = (function(){
        
        //DOM 
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
            sectionAppTop_h = null,
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
        var mq_large = "1050px"; //config .scss has a reference to it
            
        
        //functions
        function setChangingVariables(){
            resultsTop_h = results.offsetTop;
            aboutTop_h = about.offsetTop;
            footerTop_h = footer.offsetTop;
            sectionAppTop_h = sectionApp.offsetTop;
            
            header_offsetHeight = header.offsetHeight;
            footer_offsetHeight = footer.offsetHeight;
            
            offsetTops.tab__results = resultsTop_h - header_offsetHeight;
            offsetTops.tab__about = aboutTop_h - header_offsetHeight;
        }
        
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
            console.log(document.body.scrollTop);
            console.log(resultsTop_h);
            if(sectionAppTop_h === 0){
                tab_play.classList.add("is-selected");
            }
            if(resultsTop_h === 0){
                tab_results.classList.add("is-selected");
            }
        }
        
        function menuFolding(){
            nav.classList.remove("is-phone-nav-active");
            menu_toggle.classList.remove("is-toggle-nav-active");
        }
        
        function stickyFooter(){
            footer.classList.remove("is-sticky");
            if(footerTop_h + footer_offsetHeight < window.innerHeight){
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
        });
                
        tab_about.addEventListener("click", function(e){
            scrollTo(e);
            togglePhoneNav();
        });
        
        tab_play.addEventListener("click", function(e){
            scrollTo(e);
            togglePhoneNav();
        });
        
        window.addEventListener("scroll", function(){
            setChangingVariables();
            tabHighlighting();
        })
                                
        window.addEventListener("resize", function(){
            setStage();
            setChangingVariables();
            stickyFooter();
            tabHighlighting();
        });
        
        document.addEventListener("DOMContentLoaded", function(){
            setStage();
            setChangingVariables();
            fillResultsUp();
            stickyFooter();
            tabHighlighting();
        });
        
        
        
              
    })()
        
    
    
    global.ui = ui;
    
})(window);