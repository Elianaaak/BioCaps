// window.addEventListener("scroll", function () {
//   let frame1 = document.getElementById("scroll-behavior");
//   let posFrame1 = frame1.getBoundingClientRect().top;

//   if (posFrame1 < 0) {
//     frame1.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0;'

//   }
// });

function App() {}

window.onload = function (event) {
  var app = new App();
  window.app = app;
};

App.prototype.processingButton = function (event) {
  const btn = event.currentTarget;
  const slickList = event.currentTarget.parentNode;
  const track = event.currentTarget.parentNode.querySelector("#track");
  const slick = track.querySelectorAll(".slick");

  const slickWidth = slick[0].offsetWidth;

  const trackWidth = track.offsetWidth;
  const listWidth = slickList.offsetWidth;

  track.style.left == ""
    ? (leftPosition = track.style.left = 0)
    : (leftPosition = parseFloat(track.style.left.slice(0, -2) * -1));

  btn.dataset.button == "button-prev"
    ? prevAction(leftPosition, slickWidth, track)
    : nextAction(leftPosition, trackWidth, listWidth, slickWidth, track);
};

let prevAction = (leftPosition, slickWidth, track) => {
  if (leftPosition > 0) {
    console.log("entro 2");
    track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
  }
};

let nextAction = (leftPosition, trackWidth, listWidth, slickWidth, track) => {
  if (leftPosition < trackWidth - listWidth) {
    track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
  }
};

// Sección FAQ

let faqAnswer1 = document.getElementById("faqanswer1");
let faqAnswer2 = document.getElementById("faqanswer2");
let faqAnswer3 = document.getElementById("faqanswer3");
let faqAnswer4 = document.getElementById("faqanswer4");
let faqAnswer5 = document.getElementById("faqanswer5");

let faqDiv1 = document.getElementById("faqDiv1");
let faqDiv2 = document.getElementById("faqDiv2");
let faqDiv3 = document.getElementById("faqDiv3");
let faqDiv4 = document.getElementById("faqDiv4");
let faqDiv5 = document.getElementById("faqDiv5");

faqAnswer1.style.cssText = "background-color: #709646; color: #ffffff;";
faqDiv1.style.cssText = "display: block;";

function faqSelect1() {
  faqAnswer1.style.cssText = "background-color: #709646; color: #ffffff;";
  faqAnswer2.style.cssText = "background-color: transparent; color: #494949;";
  faqAnswer3.style.cssText = "background-color: transparent; color: #494949;";
  faqAnswer4.style.cssText = "background-color: transparent; color: #494949;";
  faqAnswer5.style.cssText = "background-color: transparent; color: #494949;";

  faqDiv1.style.cssText = "display: block;";
  faqDiv2.style.cssText = "display: none;";
  faqDiv3.style.cssText = "display: none;";
  faqDiv4.style.cssText = "display: none;";
  faqDiv5.style.cssText = "display: none;";
}

function faqSelect2() {
  faqAnswer2.style.cssText = "background-color: #709646; color: #ffffff;";
  faqAnswer1.style.cssText = "background-color: transparent; color: #494949;";
  faqAnswer3.style.cssText = "background-color: transparent; color: #494949;";
  faqAnswer4.style.cssText = "background-color: transparent; color: #494949;";
  faqAnswer5.style.cssText = "background-color: transparent; color: #494949;";

  faqDiv1.style.cssText = "display: none;";
  faqDiv2.style.cssText = "display: block;";
  faqDiv3.style.cssText = "display: none;";
  faqDiv4.style.cssText = "display: none;";
  faqDiv5.style.cssText = "display: none;";
}

function faqSelect3() {
  faqAnswer3.style.cssText = "background-color: #709646; color: #ffffff;";
  faqAnswer2.style.cssText = "background-color: transparent; color: #494949;";
  faqAnswer1.style.cssText = "background-color: transparent; color: #494949;";
  faqAnswer4.style.cssText = "background-color: transparent; color: #494949;";
  faqAnswer5.style.cssText = "background-color: transparent; color: #494949;";

  faqDiv1.style.cssText = "display: none;";
  faqDiv2.style.cssText = "display: none;";
  faqDiv3.style.cssText = "display: block;";
  faqDiv4.style.cssText = "display: none;";
  faqDiv5.style.cssText = "display: none;";
}

function faqSelect4() {
  faqAnswer4.style.cssText = "background-color: #709646; color: #ffffff;";
  faqAnswer2.style.cssText = "background-color: transparent; color: #494949;";
  faqAnswer3.style.cssText = "background-color: transparent; color: #494949;";
  faqAnswer1.style.cssText = "background-color: transparent; color: #494949;";
  faqAnswer5.style.cssText = "background-color: transparent; color: #494949;";

  faqDiv1.style.cssText = "display: none;";
  faqDiv2.style.cssText = "display: none;";
  faqDiv3.style.cssText = "display: none;";
  faqDiv4.style.cssText = "display: block;";
  faqDiv5.style.cssText = "display: none;";
}

function faqSelect5() {
  faqAnswer5.style.cssText = "background-color: #709646; color: #ffffff;";
  faqAnswer4.style.cssText = "background-color: transparent; color: #494949;";
  faqAnswer3.style.cssText = "background-color: transparent; color: #494949;";
  faqAnswer2.style.cssText = "background-color: transparent; color: #494949;";
  faqAnswer1.style.cssText = "background-color: transparent; color: #494949;";

  faqDiv1.style.cssText = "display: none;";
  faqDiv2.style.cssText = "display: none;";
  faqDiv3.style.cssText = "display: none;";
  faqDiv4.style.cssText = "display: none;";
  faqDiv5.style.cssText = "display: block;";
}

// Pre navbar

let text1 = document.getElementById("pre-navbar_text1");
let text2 = document.getElementById("pre-navbar_text2");
let text3 = document.getElementById("pre-navbar_text3");

function changeText1() {
  text1.style.cssText = "display: block;";
  text2.style.cssText = "display: none;";
  text3.style.cssText = "display: none;";
}
changeText1()

function changeText2() {
  text1.style.cssText = "display: none;";
  text2.style.cssText = "display: block;";
  text3.style.cssText = "display: none;";
}

function changeText3() {
  text1.style.cssText = "display: none;";
  text2.style.cssText = "display: none;";
  text3.style.cssText = "display: block;";
}

function changeTextInit() {
  setTimeout(() => {
    changeText2();
    setTimeout(() => {
      changeText3();
      setTimeout(() => {
        changeText1();
        setTimeout(() => {
          changeTextInit();
        }, "0");
      }, "4000");
    }, "4000");
  }, "4000");
}

changeTextInit()


