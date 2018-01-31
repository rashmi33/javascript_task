$('document').ready(function(){
  $('#mainLink').click(function(){
	  var main = document.getElementById("main");
		var about = document.getElementById("about");
		var contact = document.getElementById("contact");
		main.style.display = "block";
		contact.style.display = "none";
		about.style.display = "none";
	});

	$('#aboutLink').click(function(){
	  var main = document.getElementById("main");
		var about = document.getElementById("about");
		var contact = document.getElementById("contact");
		main.style.display = "none";
		contact.style.display = "none";
		about.style.display = "block";
	});
  
  $('#contactLink').click(function(){
		var main = document.getElementById("main");
		var about = document.getElementById("about");
		var contact = document.getElementById("contact");
		main.style.display = "none";
		contact.style.display = "block";
		about.style.display = "none";
  });
});