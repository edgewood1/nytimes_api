
function restart(){

var wellSection;
var data;
var data1;
var data2;
var url;
var begin1

$("#clear").on("click", function(event) {
        event.preventDefault();
        $("#results").empty();
        restart();});

$("#search").on("click", function(event) {
        event.preventDefault();

        
//this gets the search term
       var page;
		var term= $("#term").val().trim();
//this adds records to url.  page=0 means records 0-9; page=1 means records 10-19

		var records1= $("#records").val().trim();
       if (records1<10) 
			{page=0;}
		else if 
			(records1>10 && records1<20) 
			{page=1;}

//this gets the dates from the input
		begin1= $("#begin").val().trim();
		var end1= $("#end").val().trim();
//checks to see if a date is present.  
	
	if(begin1.length>0) {
		//create the right date format
		var date="0101";
		parseInt(date);
		begin1=begin1+date;
		end1=end1+date; 
		//add dates to url
		url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=9d7068958bdf4f8db4b43ee759924b10&q=" + term + "&page=" + page + "&begin_date=" + begin1 + "&end_date=" + end1; 
}

//otherwise, search without dates in the url
		
	else{
		url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=9d7068958bdf4f8db4b43ee759924b10&q=" + term + "&page=" + page;
      }
////ajax request
$.ajax({
  url: url,
  method: 'GET',
//first brackets below closes the ajax function
}).done(function(results) {
var articleCounter=0;  
	data = results.response;
		for (i=0; i<records1; i++) {
			console.log("test");
			data1 = data.docs[records1].snippet;
			data2 = data.docs[records1].web_url;
			data3 = data.docs[records1].pub_date;

		
			

articleCounter++;
wellSection=$("<div>").addClass("container");
$("#results").append(wellSection);
wellSection=$("<div>").addClass("jumbotron");
$("#results").append(wellSection);
var wellSection1=$("<button>");
wellSection1.attr("type", "button").addClass("btn btn-primary").text(articleCounter);
wellSection.append(wellSection1);
wellSection1=$("<p>").append(data3.substring(0, 10));
wellSection.append(wellSection1);
wellSection1=$("<p>").append(data1+"<br>");
wellSection.append(wellSection1);
wellSection1=$("<a>").attr("href", data2).text(data2).append("<br><br>");

wellSection.append(wellSection1);

}//for loop

//below, first brackets close the function(results)
})
// .fail(function(err) {
  // throw err;
  
// });//closes function(err)

}); //closes function event

}; //restart

restart();