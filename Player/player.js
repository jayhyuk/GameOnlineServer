

module.exports.Player = function(request,socket){
     var playername = request;
     
     return {
        playername: playername,
        socket: socket
      };
    
    };