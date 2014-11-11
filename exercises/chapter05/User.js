      function User(username){
        
        //unique
        var name = username;

        var equipment = null;

        return {

          getName : function(){
            return name;
          },

          getEquipment : function(){
            return equipment || null;
          }, 

          setEquipment : function(eq){
            if (equipment){
              console.log("user already has equipment");
            }
            equipment = eq;
            return this;
          }

        };
      }