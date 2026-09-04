$(document).ready(function() {
	$("#imagetoggler").click(function(){
		$("img").toggle();
	});
	$("h1").click(function() {
		$("p").addClass("bright");
		$("img").addClass("border");
	});
	
	$("#p1").click(function() {
		$(".disappear").toggle(); //or hide
	});
	
	
	$(".disappear").hover(function(){
  alert("bro click me bro");
},
function(){
  alert("also im a action fyi");
});
	
	
});

//
//In myScript.js, add code to make it so clicking on the first paragraph makes
//the second and third paragraphs disappear. 
//Hint: To select all elements in a class, use (.className) as the selector. 