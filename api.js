


$("#search").on("click", function(event) {
        event.preventDefault();

         
       //grab search term
       var page;
		var term= $("#term").val().trim();
		var records= $("#records").val().trim();
       if (records<10) 
			{page=1;}
		else if 
			(records>10 && records<20) 
			{page=2;}
		

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=9d7068958bdf4f8db4b43ee759924b10&q=" + term + "&page=" + page; 
 
      
////ajax request
$.ajax({
  url: url,
  method: 'GET',
}).done(function(results) {
  
	var data = results.response;
		for (i=0; i<records; i++) {
			console.log("test");
			var data1 = data.docs[records].snippet;
			var data2 = data.docs[records].web_url;

			$("#results").append(data1)
			$("#results").append(data2);
}//for loop


}).fail(function(err) {
  throw err;
  
});

});