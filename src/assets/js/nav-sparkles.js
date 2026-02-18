(function () {
  var symbols = ["\u2726", "\u2727", "\u2605", "\u00b7"];
  var colors = ["#D4AF37", "#F5F1E9", "#C9A84C", "#E8D5A3"];

  function sparkle(x, y, count) {
    for (var i = 0; i < count; i++) {
      (function (index) {
        setTimeout(function () {
          var el = document.createElement("span");
          el.className = "form-particle";
          el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
          el.style.color = colors[Math.floor(Math.random() * colors.length)];
          el.style.left = x + "px";
          el.style.top = y + "px";
          el.style.fontSize = "0.7em";

          var angle = Math.random() * Math.PI * 2;
          var distance = 30 + Math.random() * 50;
          el.style.setProperty("--dx", Math.cos(angle) * distance + "px");
          el.style.setProperty("--dy", Math.sin(angle) * distance + "px");
          el.style.setProperty("--scale", (0.4 + Math.random() * 0.8).toString());

          document.body.appendChild(el);
          setTimeout(function () {
            if (el.parentNode) el.parentNode.removeChild(el);
          }, 1000);
        }, index * 25);
      })(i);
    }
  }

  function fromElement(el, count) {
    var rect = el.getBoundingClientRect();
    sparkle(
      rect.left + rect.width / 2,
      rect.top + rect.height / 2 + window.scrollY,
      count
    );
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Menu button sparkle
    var menuBtn = document.querySelector('a[href="#menu"]');
    if (menuBtn) {
      menuBtn.addEventListener("click", function () {
        fromElement(menuBtn, 10);
      });
    }

  });
})();
