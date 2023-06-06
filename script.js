function showAlert() {alert('Hola! esta es un alerta desde JavaScript');}
document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function(){
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})
                      function toggleVideo() {
                        var video = document.querySelector("iframe");
                        if (video.style.display === "none") {
                          video.style.display = "block";
                        } else {
                          video.style.display = "none";
                        }
                      }
                      function toggleMenu() {
                        var navbar = document.querySelector(".navbar");
                        navbar.classList.toggle("show-mobile");
                      }
                      
                      var menuButton = document.querySelector(".button-menu-toggle");
                      menuButton.addEventListener("click", toggleMenu);