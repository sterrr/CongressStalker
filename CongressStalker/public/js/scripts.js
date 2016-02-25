$(document).ready(function(){

	$(".Create").click(function(){
		var holder = "";
		userName = $("#username").val();
		holder += "<center>";
		holder += "<h1>" + userName + ", type in a zip code! </h1>";
		holder += "<input type=\"text\" id=\"zipCode\">";
		holder += "<br>";
		holder += "<br>";
		holder += "<input class=\"btn btn-primary\" type=\"submit\" id=\"findZip\" value=\"Submit!\">";
		holder += "</center>";
		

		$("#hold").empty();
		$("#hold").append(holder);
	});

	$(".Login").click(function(){
		var holder = "";
		userName = $("#username").val();
		holder += "<center>";
		holder += "<h1>" + userName + ", type in a zip code! </h1>";
		holder += "<input type=\"text\" id=\"zipCode\">";
		holder += "<br>";
		holder += "<br>";
		holder += "<input class=\"btn btn-primary\" type=\"submit\" id=\"findZip\" value=\"Submit!\">";
		holder += "</center>";

		$("#hold").empty();
		$("#hold").append(holder);
	});

});