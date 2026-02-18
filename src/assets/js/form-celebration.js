(function () {
  var symbols = ["\u2726", "\u2727", "\u2728", "\u2605", "\u00b7"];
  var colors = ["#D4AF37", "#F5F1E9", "#C9A84C", "#E8D5A3", "#FFFAE6"];

  function createParticle(x, y) {
    var el = document.createElement("span");
    el.className = "form-particle";
    el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    el.style.color = colors[Math.floor(Math.random() * colors.length)];
    el.style.left = x + "px";
    el.style.top = y + "px";

    var angle = Math.random() * Math.PI * 2;
    var distance = 60 + Math.random() * 100;
    var dx = Math.cos(angle) * distance;
    var dy = Math.sin(angle) * distance;
    var scale = 0.5 + Math.random() * 1.5;

    el.style.setProperty("--dx", dx + "px");
    el.style.setProperty("--dy", dy + "px");
    el.style.setProperty("--scale", scale);

    document.body.appendChild(el);

    setTimeout(function () {
      if (el.parentNode) el.parentNode.removeChild(el);
    }, 1200);
  }

  function celebrate(btn) {
    var rect = btn.getBoundingClientRect();
    var cx = rect.left + rect.width / 2;
    var cy = rect.top + rect.height / 2;

    for (var i = 0; i < 24; i++) {
      setTimeout(
        function (index) {
          return function () {
            createParticle(cx, cy + window.scrollY);
          };
        }(i),
        i * 30
      );
    }

    btn.classList.add("form-btn-glow");
    setTimeout(function () {
      btn.classList.remove("form-btn-glow");
    }, 1400);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var forms = document.querySelectorAll('form[action*="formsubmit"]');
    for (var i = 0; i < forms.length; i++) {
      (function (form) {
        form.addEventListener("submit", function (e) {
          var btn = form.querySelector('input[type="submit"]');
          if (!btn) return;

          e.preventDefault();
          celebrate(btn);

          setTimeout(function () {
            form.submit();
          }, 1400);
        });
      })(forms[i]);
    }
  });
})();
