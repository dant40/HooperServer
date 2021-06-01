$().ready(function() {
   var urlParams = new URLSearchParams(window.location.search);
   console.log(urlParams.toString());
   $.getJSON( "courts.json", function( data ) {   
      console.log(data);
   
  });
});
