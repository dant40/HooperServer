$().ready(function() {
   var urlParams = new URLSearchParams(window.location.search);
   //remember: decimal point => %2E
   var lat = parseFloat(urlParams.get("lat"));
   var long = parseFloat(urlParams.get("long"));
   console.log("test3");
   
   $.getJSON( "courts.json", function( data ) {   
      var resObject = new Object();
      var distances = [];
      var dist;
      console.log(data["courts"])
      var courts = data["courts"];
      for(var i = 0; i < courts.length;i++){
         let item = courts[i];
         console.log(item["latitude"]);
            let x = item["latitude"] - lat;
            x *= x;
            let y = item["longitude"] - long;
            y *= y;
            dist = Math.sqrt(x + y);
            distances.push(dist);
      }
      console.log(distances);
      //return resOjbect;
  });
});
