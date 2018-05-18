;(function(global){
    
    "use strict";

    var init = function(){
        
        return (function(){
        
            function _create(att, val){
                var db_json = JSON.parse(localStorage.getItem("config"));
                db_json[att] = val;
                localStorage.setItem("config", JSON.stringify(db_json));    
            }
            
            function _read(att){
                var db_json = JSON.parse(localStorage.getItem("config"));
                return db_json[att];
            }
            
            function _update(att, val){
                _create(att, val)  
            }
            
            function _delete(){
                
            }
        
                
            
        
            return {
                create: _create,
                read: _read,
                update: _update,
                delete: _delete
            }
        
        })()
    }
    
    //create instance
    if(!localStorage.getItem("config")){
        init();
    }
    
    global.db = init;
    window.madball = global;
    
})(window.madball || {})
