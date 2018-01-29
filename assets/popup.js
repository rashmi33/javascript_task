window.onload = function(){
	var modal = document.getElementById('myModal');
	var btn1 = document.getElementById("sign-up1");
	var btn2 = document.getElementById("sign-up2");
	var btn3 = document.getElementById("sign-up3");
	var span = document.getElementsByClassName("close")[0];
	btn1.onclick = function() {
	  modal.style.display = "block";
	}
	btn2.onclick = function() {
	  modal.style.display = "block";
	}
	btn3.onclick = function() {
	  modal.style.display = "block";
	}
	span.onclick = function() {
	  modal.style.display = "none";
	}
	window.onclick = function(event) {
	  if (event.target == modal) {
	    modal.style.display = "none";
	  }
	}
}