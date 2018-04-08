var currentSlide = {
  about__slider: 0,
  cuisine__slider: 0,
  events__slider: 0
};
var i;
var navigation = document.querySelector(".main-navigation");
var logo = document.querySelector(".logo");
var btn = document.querySelector(".main-navigation__toggle");
var navigationList = document.querySelector(".main-navigation__list");
var btnNext = document.querySelectorAll(".slider-button--next");
var btnPrev = document.querySelectorAll(".slider-button--prev");
var aboutSlider = document.querySelector(".about__slider");
var cuisineSlider = document.querySelector(".cuisine__slider");
var eventsSlider = document.querySelector(".events__slider");

function setSize() {
  //размеры для изображений слайдера
  var items = aboutSlider.getElementsByTagName("img");
  setImageSize(items, (aboutSlider.clientWidth - 3)+"px");
  aboutSlider.style.height = items[0].clientHeight+"px";
  var sliderItems = aboutSlider.getElementsByClassName("slider-items");
  sliderItems[0].style.transform = "translateX(-"+ currentSlide["about__slider"] * (items[0].clientWidth + 3)+"px)";

  items = cuisineSlider.getElementsByTagName("img");
  setImageSize(items, (cuisineSlider.clientWidth - 3)+"px");
  cuisineSlider.style.height = items[0].clientHeight+"px";
  sliderItems = cuisineSlider.getElementsByClassName("slider-items");
  sliderItems[0].style.transform = "translateX(-"+ currentSlide["cuisine__slider"] * (items[0].clientWidth + 3)+"px)";

  items = eventsSlider.getElementsByTagName("img");
  setImageSize(items, (eventsSlider.clientWidth - 3)+"px");
  eventsSlider.style.height = items[0].clientHeight+"px";
  sliderItems = eventsSlider.getElementsByClassName("slider-items");
  sliderItems[0].style.transform = "translateX(-"+ currentSlide["events__slider"] * (items[0].clientWidth + 3)+"px)";
}

function setImageSize(items, width) {
  for (i = 0; i < items.length; i++) {
    items[i].style.width = width;
    items[i].style.height = "auto";
  }
}

window.onload = function () {
  setSize();
  //события
  window.onscroll = function() {
    if (window.pageYOffset>200) {
      navigation.classList.add("main-navigation--mini");
      logo.classList.add("logo--mini");
    } else {
      navigation.classList.remove("main-navigation--mini");
      logo.classList.remove("logo--mini");
    }

    navigationList.classList.add("main-navigation__list--collapsed");
  };

  window.onresize = function() {
    setSize();
  };

  btn.onclick = function (event) {
    navigationList.classList.toggle("main-navigation__list--collapsed");
  };

  for (i = 0; i < btnNext.length; i++) {
    (function(i) {
      var item = btnNext[i];
      item.onclick = function (event) {
        var parent = item.parentNode;
        var sliderItems = parent.getElementsByClassName("slider-items");
        var items = parent.getElementsByTagName("img");
        if (parent.classList.contains("about__slider")) {
          if (currentSlide["about__slider"] < (items.length - 1)) currentSlide["about__slider"]++;
          sliderItems[0].style.transform = "translateX(-"+ currentSlide["about__slider"] * (items[0].clientWidth + 3)+"px)";
        }

        if (parent.classList.contains("cuisine__slider")) {
          if (currentSlide["cuisine__slider"] < (items.length - 1)) currentSlide["cuisine__slider"]++;
          sliderItems[0].style.transform = "translateX(-"+ currentSlide["cuisine__slider"] * (items[0].clientWidth + 3)+"px)";
        }

        if (parent.classList.contains("events__slider")) {
          if (currentSlide["events__slider"] < (items.length - 1)) currentSlide["events__slider"]++;
          sliderItems[0].style.transform = "translateX(-"+ currentSlide["events__slider"] * (items[0].clientWidth + 3)+"px)";
        }
      }
    })(i);
  }

  for (i = 0; i < btnPrev.length; i++) {
    (function(i) {
      var item = btnPrev[i];
      item.onclick = function (event) {
        var parent = item.parentNode;
        var sliderItems = parent.getElementsByClassName("slider-items");
        var items = parent.getElementsByTagName("img");
        if (parent.classList.contains("about__slider")) {
          if (currentSlide["about__slider"] > 0) currentSlide["about__slider"]--;
          sliderItems[0].style.transform = "translateX(-"+ currentSlide["about__slider"] * (items[0].width + 3)+"px)";
        }

        if (parent.classList.contains("cuisine__slider")) {
          if (currentSlide["cuisine__slider"] > 0) currentSlide["cuisine__slider"]--;
          sliderItems[0].style.transform = "translateX(-"+ currentSlide["cuisine__slider"] * (items[0].width + 3)+"px)";
        }

        if (parent.classList.contains("events__slider")) {
          if (currentSlide["events__slider"] > 0) currentSlide["events__slider"]--;
          sliderItems[0].style.transform = "translateX(-"+ currentSlide["events__slider"] * (items[0].width + 3)+"px)";
        }
      }
    })(i);
  }

}
