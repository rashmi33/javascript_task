// window.onload = function(){
// var i1=document.getElementById("about-us");
// var b1=document.getElementById("a1");
// b1.onclick = function() {
// 	  i1.style.display = "block";
// 	}
// }
//  window.onload = function(){
//     var home = document.getElementById("homepage");
//     var about = document.getElementById("about_us");
//     if (document.getElementById("a2").click) {
//         home.style.display = "none";
//         about.style.display = "block";
//         //home.addClass("hidden");
//         //about.removeClass("hidden");
//     } else {
//         home.style.display = "block";
//         about.style.display = "none";
//     }
// }
// }
// function overlay(){
// $('#home-main').addClass("hidden");
// $('#about-main').removeClass("hidden");
// console.log(window.location.href);
// }


// $(document).ready(function(){
// var display =  $("#contact_us").css('display','block');
//     if(display!="none")
//     {
//         $("#contact_us").attr("style", "display:none");
//     }
// });
// $('document').ready(function(){
// if($('#contact_us').css('display') == 'none'){ 
//    $('#contact_us').show('slow'); 
// } else { 
//    $('#contact_us').hide('slow'); 
// }
// });


$('#a2').click(function() {
   $('.about_us').toggle();
});