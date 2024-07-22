function openDrawer() {
    document.getElementById("myDrawer").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeDrawer() {
    document.getElementById("myDrawer").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}


  let slideIndex = 0;

  function showSlides(n) {
    let slides = document.querySelectorAll('.carousel-images img');
    if (n >= slides.length) {
      slideIndex = 0;
    } else if (n < 0) {
      slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    slides[slideIndex].style.display = 'block';
  }

  function moveSlide(n) {
    slideIndex += n;
    showSlides(slideIndex);
  }

  
  showSlides(slideIndex);

  setInterval(function() {
    moveSlide(1);
  }, 3000);
