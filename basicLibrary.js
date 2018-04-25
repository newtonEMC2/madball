//var $$ = (function(global){
//    
//    //create just one instance
//    if(typeof($$) !== "undefined"){
//        return;
//    }
//    
//    //private methods
//    function _html(value){
//
//        if(!value && this.lengthNodeList == 1){
//            this.arrNodes[0].innerHTML;
//            return this.arrNodes[0].innerHTML;
//        }
//        for(var i = 0; i < this.lengthNodeList; i++){
//            this.arrNodes[i].innerHTML = value;
//        }
//        
//        return this;
//    }
//    
//    function _attr(){
//        
//    }
//    
//    //public objects
//    return (function(selector){
//        var obj = {};
//        obj.selector = selector;
//        obj.nodeList = document.querySelectorAll(selector);
//        obj.lengthNodeList = obj.nodeList.length;
//        obj.arrNodes = function(){
//            var arr = [];
//            for(var i = 0; i < obj.lengthNodeList; i++){
//                arr.push(obj.nodeList[i]);
//            }
//            return arr;
//        }();
//
//        obj.html = _html;
//
//
//
//        return obj;
//    });
//
//        
//    
//})(window);
//



var __ = (function(global){
    
    "use strict"
    
    //if there's no __ in the global scope, create one,
    if(typeof(global.__) !== "undefined"){
        return;
    }
    
    return (function(){
        
        //return: an integer between min and max, both included
        //params: integer number >= 0, min<max
        function _random(min, max){
            if(min >= max || min < 0 || max < 0){
                return;
            }
            return Math.floor(Math.random() * (max-min + 1) + min);
        }
        

        return {
            random: _random
        }  
        
    })()
        
        
        
})(window);















/*;$$ = (function(global){
    "use strict"
    
    function init(){
        
        var tfuck = {};
        
        tfuck.warning = function(text){
            console.log(text);
        };
        
        tfuck.dom = function(el){
            if(typeof(el) !== "string"){return null};
            var kindOfEl = el.slice(0,1);
            switch(kindOfEl){
                case "#":
                    return document.getElementById(el.slice(1));
                    break;
                case ".":
                    return document.getElementsByClassName(el.slice(1));
                    break;
                default:
                    return document.getElementsByTagName(el);
            }
        }
        
        return tfuck;
    }
    
    //if there's no thefuck in the global scope, create one,
    if(typeof(tfuck) === "undefined"){
        global.tfuck = init();
    }
    
    
    
})(window);*/




