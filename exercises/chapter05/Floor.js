      function Floor(){

        var rooms = [];        

        var _addRooms = function() {
          for (var i = 0; i < arguments.length; i++) {
            rooms.push(arguments[i]);
          };
        };

        // _addRooms(arguments);
        for (var i = 0; i < arguments.length; i++) {
          rooms.push(arguments[i]);
        };        

        return{

          // addRooms : function() {
          //   for (var i = 0; i < arguments.length; i++) {
          //     rooms.push(arguments[i]);
          //   };
          // },
          addRooms : _addRooms,
          
          getEquipmentById : function(id){
            for (var i = 0; i < rooms.length; i++) {
              console.log("Room number " + i);
              var eq = null;
              if (eq = rooms[i].getEquipmentById(id)){
                return eq;
              }
            };
            return null;
          }

        }

      }