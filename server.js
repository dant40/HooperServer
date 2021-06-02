$().ready(function() {
   var urlParams = new URLSearchParams(window.location.search);
   //remember: decimal point => %2E
   var lat = parseFloat(urlParams.get("lat"));
   var long = parseFloat(urlParams.get("long"));
   console.log("test6");
   
   $.getJSON( "courts.json", function( data ) {   
      var resObject = new Object();
      var distances = [];
      var dist;
      var courts = data["courts"];
      for(var i = 0; i < courts.length;i++){
         let item = courts[i];
            let x = item["latitude"] - lat;
            x *= x;
            let y = item["longitude"] - long;
            y *= y;
            dist = Math.sqrt(x + y);
            var tempObj = new Object();
            tempObj.distance = dist;
            tempObj.index = i;
            distances.push(tempObj);
      }
      distances.sort((a, b) =>  (a.distance - b.distance) );
      
      resObject.first = courts[distances[0].index]
      resObject.second = courts[distances[1].index]
      resObject.third = courts[distances[2].index]
      console.log(resObject);
      return resObject;
  });
});
