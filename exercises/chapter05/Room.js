      function Room(){

        var eqs = [];
        
        var users = [];

        function addUser(usr){
          //each username is unique
          users[usr.getName()] = users[usr.getName()] || usr;
        }

        return{

          addEquipment : function(){
            for (var i = 0; i < arguments.length; i++) {
              eqs.push(arguments[i]);
            };
            return this;
          },

          addUsers : function(){
            for (var i = 0; i < arguments.length; i++) {
              addUser(arguments[i]);
            };
            return this;
          },

          getUserByName : function(username){
            return users[username] || null;
          },

          getEquipmentById : function(id){
            
            for (var i = 0; i < eqs.length; i++) {
              console.log("Equipment number " + eqs[i].getId());              
              if(eqs[i].getId() === id){ 
                return eqs[i];
              } 
            };
            
            for (var key in users) {
              console.log("User " + key);
              var eq = null;
              if (eq = users[key].getEquipment()){
                console.log("Equipment number " + eq.getId());
                if (eq.getId() === id) {
                  return eq;
                };
              }
            };

            //never found
            return null;
          }

        };
      }