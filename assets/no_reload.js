function homeFunc(){
	$('#about').addClass("hidden");
	$('#contact').addClass("hidden");
  $('#main').removeClass("hidden");
}

function aboutFunc(){
	$('#main').addClass("hidden");
	$('#contact').addClass("hidden");
  $('#about').removeClass("hidden");
}

function contactFunc(){
	$('#main').addClass("hidden");
	$('#about').addClass("hidden");
  $('#contact').removeClass("hidden");
}