(function() {
  /*   var itemClassName = "slider__photo"; */
  var items = $(".slider__photo"),
    /* (items = document.getElementsByClassName(itemClassName)), */
    totalItems = items.length,
    slide = 0;

  // Set event listeners
  function setEventListeners() {
    (next = $(".slider__button--next")[0]),
      /*     var next = document.getElementsByClassName("slider__button--next")[0], */

      (prev = $(".slider__button--prev")[0]);
    /* prev = document.getElementsByClassName("slider__button--prev")[0]; */

    $(next).on("click", getNext);
    /* next.addEventListener("click", getNext); */
    $(prev).on("click", getPrev);
    /* prev.addEventListener("click", getPrev); */
  }

  function getNext() {
    // TODO get items element with index of slide, remove active class from it
    // slide++ to increase the value of slide by 1
    //get items element with index of slide, add active class to it

    items[slide].classList.remove("active");

    if (slide === totalItems - 1) {
      slide = 0;
    } else {
      slide++;
    }
    items[slide].classList.add("active");
  }

  function getPrev() {
    // TODO
    items[slide].classList.remove("active");

    if (slide === 0) {
      slide = totalItems - 1;
    } else {
      slide--;
    }
    items[slide].classList.add("active");
  }

  function initSlider() {
    // setInitialClasses();
    setEventListeners();

    // Set moving to false so that the slider becomes interactive
    moving = false;
  }

  initSlider();
})();
