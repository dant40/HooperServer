$().ready(function() {
   var urlParams = new URLSearchParams(window.location.search);
   //remember: decimal point => %2E
   var lat = parseFloat(urlParams.get("lat"));
   var long = parseFloat(urlParams.get("long"));
   console.log("test1");
   
   $.getJSON( "courts.json", function( data ) {   
      var resObject = new Object();
      var distances = [];
      var dist;
      console.log(data)
      for(var i = 0; i < data.length;i++){
         
         let item = data[i];
         console.log(item.latitude);
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
