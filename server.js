$().ready(function() {
   $.getJSON( "courts.json", function( data ) {    
    $("#test").html(data);
  });
});
