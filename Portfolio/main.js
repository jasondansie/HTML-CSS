const nav = document.querySelector("nav");
const mobileButton = document.querySelector("#mobileButton");
const scrollUpButton = document.querySelector("#scrollUpButton");



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    nav.classList.add("bg");
    scrollUpButton.style.display = "block";
  } else {
    nav.classList.remove("bg");
    scrollUpButton.style.display = "none";
  }
}

const openMobileMenu = () =>{
  console.log("button pressed");
  if(nav.classList.contains("responsive")){
      nav.classList.remove("responsive");
      document.body.style.overflow = '';
  }
  else{
      nav.classList.add("responsive");
  }
}

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

 
  mobileButton.addEventListener("click", openMobileMenu);

  scrollUpButton.addEventListener("click", topFunction);
  
  
