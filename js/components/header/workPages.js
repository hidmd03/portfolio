// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  stickyBar();
  progressBar();
};

// Get the header
var stickyHeader = document.getElementById("header");
var bg = document.getElementById("slider");
var progressWrap = document.getElementById("pgWrap");

let lastScrollPosition = 0;

// Get the offset position of the navbar

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
var stickyBar = function () {
  let bgHeight = bg.clientHeight;

  if (window.pageYOffset > bgHeight) {
    stickyHeader.classList.remove("top");
    stickyHeader.classList.add("sticky");
    progressWrap.classList.add("up");
  } else {
    stickyHeader.classList.remove("sticky");
    stickyHeader.classList.add("top");
    progressWrap.classList.remove("up");
  }
};

const scrollHandler = (e) => {
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  let scrollDirectionDown = true;

  if (scrollTop != lastScrollPosition) {
    scrollDirectionDown = scrollTop > lastScrollPosition;
  }

  let headerTriggerPoint = scrollDirectionDown ? header.scrollHeight : 0;

  if (scrollTop > headerTriggerPoint) {
    stickyHeader.classList.add("focusout");
  } else {
    stickyHeader.classList.remove("focusout");
  }
  setTimeout(() => {
    lastScrollPosition = scrollTop;
  }, 750);
};

window.addEventListener("scroll", scrollHandler);

var onResize = function () {
  if (window.innerWidth > 768) {
    document.body.classList.remove("nav");
  }
};

window.addEventListener("resize", onResize);

function progressBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;

  var realHeight = document.documentElement.clientHeight + document.querySelector(".project").clientHeight + document.querySelector("footer").clientHeight;

  var height = document.documentElement.scrollHeight - realHeight;

  var scrolled = -100 + (winScroll / height) * 100;

  if (scrolled >= 0) {
    document.getElementById("pgBar").style.transform = "translateX(0%)";
  } else {
    document.getElementById("pgBar").style.transform = "translateX(" + scrolled + "%)";
  }
}

const header = () => {
  const burgerHandler = (e) => {
    const source = e.target.tagName == "button" ? e.target : e.target.closest("button");
    if (document.body.classList.contains("nav")) {
      document.body.classList.add("nonav");
      document.body.classList.remove("nav");
    } else {
      document.body.classList.remove("nonav");
      document.body.classList.add("nav");
    }
  };
  document.querySelector("button.burger").addEventListener("click", burgerHandler);
};

const titleImage = () => {
  var titleBg = document.getElementById("sliderBg");
  // var bottomBg = document.getElementById("bottomImg");

  var url = titleBg.dataset.url;

  titleBg.style.backgroundImage = url;
  // bottomBg.style.backgroundImage = url;
};

header();
titleImage();
