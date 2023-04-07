$(".owl-carousel-1").owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    margin: 20,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });



  let modeBtn = document.getElementById("dark-light");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "dark") {
    this.firstElementChild.src = "img/light.svg";
  } else {
    this.firstElementChild.src = "img/dark.svg";
  }
  document.body.classList.toggle("dark");
});