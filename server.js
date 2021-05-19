$().ready(function() {
   console.log("here3");
   $.getJSON( "courts.json", function( data ) {   
      console.log(data);
    $("#test").html(data);
  });
});
