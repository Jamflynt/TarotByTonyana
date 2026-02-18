(function () {
  var rotator = document.querySelector(".testimonial-rotator");
  if (!rotator) return;

  var quotes = rotator.querySelectorAll("blockquote");
  if (!quotes.length) return;

  var current = 0;
  quotes[0].classList.add("active");

  function setHeight() {
    var max = 0;
    for (var i = 0; i < quotes.length; i++) {
      quotes[i].style.position = "relative";
      quotes[i].style.visibility = "hidden";
      quotes[i].style.display = "block";
      var h = quotes[i].offsetHeight;
      if (h > max) max = h;
      quotes[i].style.position = "";
      quotes[i].style.visibility = "";
      quotes[i].style.display = "";
    }
    rotator.style.height = max + "px";
  }

  setHeight();
  window.addEventListener("resize", setHeight);

  setInterval(function () {
    quotes[current].classList.remove("active");
    current = (current + 1) % quotes.length;
    quotes[current].classList.add("active");
  }, 6000);
})();
