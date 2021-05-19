$().ready(function() {
   console.log("here1");
   $.getJSON( "courts.json", function( data ) {    
    $("#test").html(data);
  });
});
