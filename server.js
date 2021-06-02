$().ready(function() {
   var urlParams = new URLSearchParams(window.location.search);
   //remember: decimal point => %2E
   var lat = parseFloat(urlParams.get("lat"));
   var long = parseFloat(urlParams.get("long"));
   console.log("test4");
   
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
      distances.sort(function (a, b) {
        return a.distance - b.distance;
      });
         
      console.log(distances);
      //return resOjbect;
  });
});
