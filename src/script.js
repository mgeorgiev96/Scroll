"use strict";

var section = document.getElementsByTagName("section");

var slide = function slide(e) {
  var target = e.target;

  if (target.classList.contains("animate")) {
    var _loop = function _loop(i) {
      section[i].classList.add("active");
      setTimeout(function () {
        section[i].classList.remove("active");
      }, 500);
    };

    for (var i = 0; i < section.length; i++) {
      _loop(i);
    }
  }
};

window.addEventListener("click", slide);