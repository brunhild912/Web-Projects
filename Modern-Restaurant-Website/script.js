/* toggle navbar */

const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);

function toggleNav(){
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
}

/* Close nav when clicking on a nav item */

document.addEventListener("click", function(e){
    if(e.target.closest(".nav-item")){
        toggleNav();
    }
})

/* Sticky Header */
// window.addEventListener("scroll", function({
//    if(this.pageYOffset > 60){
//        document.querySelector(".header").classList.add("sticky");
//    }
//    else {
//        document.querySelector(".header").classList.remove("sticky");
//    }
//});

window.addEventListener("scroll", () => {
    if (this.scrollY > 10) {
      document.querySelector(".header").classList.add("sticky");
    } else {
      document.querySelector(".header").classList.remove("sticky");
    }
  });