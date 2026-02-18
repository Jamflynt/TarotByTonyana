(function () {
  var quotes = document.querySelectorAll(".testimonial-rotator blockquote");
  if (!quotes.length) return;

  var current = 0;
  quotes[0].classList.add("active");

  setInterval(function () {
    quotes[current].classList.remove("active");
    current = (current + 1) % quotes.length;
    quotes[current].classList.add("active");
  }, 6000);
})();
