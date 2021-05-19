$().ready(function() {
   console.log("here1");
   $.getJSON( "/courts.json", function( data ) {   
      console.log(data);
    $("#test").html(data);
  });
});
