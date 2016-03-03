$(document).ready(function(){

	$(".Create").click(function(){
		var holder = "";
		userName = $("#username").val();
		holder += "<form id = \"checkSub\" method = \"GET\" action = \"/zipcode\">";
		holder += "<center>";
		holder += "<h1>" + userName + ", type in a zip code! </h1>";
		holder += "<input type=\"text\" id=\"zipCode\" name=\"zip\">";
		holder += "<br>";
		holder += "<br>";
		holder += "<input class=\"btn btn-primary\" type=\"submit\" id=\"findZip\" value=\"Submit!\">";
		holder += "</center>";
		holder += "</form>";
		

		$("#hold").empty();
		$("#hold").append(holder);

	});

	$(".Login").click(function(){
		var holder = "";
		userName = $("#username").val();
		holder += "<form id = \"checkSub\" method = \"GET\" action = \"/zipcode\">";
		holder += "<center>";
		holder += "<h1>" + userName + ", type in a zip code! </h1>";
		holder += "<input type=\"text\" id=\"zipCode\">";
		holder += "<br>";
		holder += "<br>";
		holder += "<input class=\"btn btn-primary\" type=\"submit\" id=\"findZip\" value=\"Submit!\">";
		holder += "</center>";
		holder += "</form>";

		$("#hold").empty();
		$("#hold").append(holder);

	});

});