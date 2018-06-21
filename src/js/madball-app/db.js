;(function(global){
    
    "use strict";    
    
    if(typeof localStorage == "undefined"){
        alert("your browser does not support local storage\n" + 
              "Try to update you browser");
        return;
    }
    
    var database = (function(){
    
        var db = function(){

            var _db_json = null;

            function create(att, val){
                _db_json = JSON.parse(localStorage.getItem("config"));
                _db_json[att] = val;
                localStorage.setItem("config", JSON.stringify(_db_json));    
            }

            function read(att){
                _db_json = JSON.parse(localStorage.getItem("config"));
                return _db_json[att];
            }

            function update(att, val){
                create(att, val)  
            }

            function remove(att){
                _db_json = JSON.parse(localStorage.getItem("config"));
                delete _db_json[att];
                localStorage.setItem("config", JSON.stringify(_db_json));
            }

            return {
                create: create,
                read: read,
                update: update,
                delete: remove
            }
        }
    
        return{
            db: function(){return db()}
        }
    
    })()
    
    
    global.database = database;
    window.madball = global;
    
})(window.madball || {});
