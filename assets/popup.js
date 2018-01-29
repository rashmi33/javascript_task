function login()
{
	var form = document.getElementById('myModal');
	var btn1 = document.getElementById("signup1");
	var btn2 = document.getElementById("signup2");
	var btn3 = document.getElementById("signup3");
	var span = document.getElementsByClassName("close")[0];
	btn1.onclick = function() {
    form.style.display = "block";
  }

  btn2.onclick = function() {
    form.style.display = "block";
  }

  btn3.onclick = function() {
    form.style.display = "block";
  }

	span.onclick = function() {
    form.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == form) {
        form.style.display = "none";
    }
  }

}