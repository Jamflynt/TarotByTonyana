// Site-wide "Pause animations" control (WCAG 2.2.2 Pause, Stop, Hide).
// Starts paused when the visitor's OS asks for reduced motion; remembers the
// visitor's own choice across pages. stars.js and testimonials.js listen to it.
(function () {
  var KEY = "motionPaused";
  var listeners = [];
  var stored = null;

  try {
    stored = localStorage.getItem(KEY);
  } catch (e) {}

  var paused = stored === null
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : stored === "true";

  var buttons = document.querySelectorAll(".motion-toggle");

  function apply() {
    document.documentElement.classList.toggle("motion-paused", paused);
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].textContent = paused ? "Play animations" : "Pause animations";
    }
    for (var j = 0; j < listeners.length; j++) {
      listeners[j](paused);
    }
  }

  function toggle() {
    paused = !paused;
    try {
      localStorage.setItem(KEY, String(paused));
    } catch (e) {}
    apply();
  }

  // Bound per button: the menu panel stops click propagation, so a document-level listener would miss it.
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", toggle);
  }

  window.siteMotion = {
    isPaused: function () {
      return paused;
    },
    onChange: function (fn) {
      listeners.push(fn);
    },
  };

  apply();
})();
