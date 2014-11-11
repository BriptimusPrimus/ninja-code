      var Equipment = (function (){

        var nextId = 1;

        return function(){
          
          var id = nextId++;

          return {

            getId : function(){
              return id;
            },

            fix : function(){
              console.log("equipment[" + id + "] fixed");
              return true;
            }

          };
        };        
      })();