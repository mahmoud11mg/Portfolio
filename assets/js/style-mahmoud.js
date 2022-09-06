// $(document).ready(function(){
//     $( ".hover-cv" ).hover(
//     function() {
//       $( ".hover-cv" ).attr("data-targetid", "#exampleModa2")
//     }, function() {
      
//     }
//   );
// });



function setCookie(name, value, days) {
	var expires = "";
	if (days) {
	  var date = new Date();
	  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
	  expires = "; expires=" + date.toUTCString();
	}
	document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }
  
  function getCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
	  var c = ca[i];
	  while (c.charAt(0) == ' ') c = c.substring(1, c.length);
	  if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
  }

// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');





       /* theme toggle */
	   const themeToggler = document.getElementById("chk")


  let theme = window.localStorage.getItem("qservTheme") || "light"
  if (theme === "dark") {
    document.body.classList.add("dark")
    themeToggler.setAttribute("checked", "true")
  }

  themeToggler?.addEventListener("click", () => {
    theme = window.localStorage.getItem("qservTheme") || "light"
    if (theme === "light") {
      window.localStorage.setItem("qservTheme", "dark")
    } else {
      window.localStorage.setItem("qservTheme", "light")
    }
    document.body.classList.toggle("dark")
  });


