$().ready(function() {
   console.log("here2");
   $.getJSON( "/courts.json", function( data ) {   
      console.log(data);
    $("#test").html(data);
  });
});
