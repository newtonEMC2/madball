;var __ = (function(window){

    "use strict";

    //if there's no __ in the global scope, create one,
    if(typeof(window.__) !== "undefined"){
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
