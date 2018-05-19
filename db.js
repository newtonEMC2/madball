;(function(global){
    
    "use strict";    
    
    if(typeof localStorage == "undefined"){
        alert("your browser does not support local storage\n" + 
              "Try to update you browser");
        return;
    }
        
    var db = (function(){
        
        var db_json = null;

        function _create(att, val){
            db_json = JSON.parse(localStorage.getItem("config"));
            db_json[att] = val;
            localStorage.setItem("config", JSON.stringify(db_json));    
        }

        function _read(att){
            db_json = JSON.parse(localStorage.getItem("config"));
            return db_json[att];
        }

        function _update(att, val){
            _create(att, val)  
        }

        function _delete(att){
            db_json = JSON.parse(localStorage.getItem("config"));
            delete db_json[att];
            localStorage.setItem("config", JSON.stringify(db_json));
        }

        return {
            create: _create,
            read: _read,
            update: _update,
            delete: _delete
        }

    })()
    
    
    global.db = db;
    window.madball = global;
    
})(window.madball || {})
