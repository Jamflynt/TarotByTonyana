// Keeps "years of experience" current between deploys. Each number on the page is
// rendered at build time inside <span data-years-since="YYYY-MM-DD">; this
// recounts it from today's date so it rolls over on the anniversary.
(function () {
  var els = document.querySelectorAll("[data-years-since]");
  var now = new Date();

  for (var i = 0; i < els.length; i++) {
    var parts = els[i].getAttribute("data-years-since").split("-");
    var y = parseInt(parts[0], 10);
    var m = parseInt(parts[1], 10);
    var d = parseInt(parts[2], 10);
    var years = now.getFullYear() - y;
    var month = now.getMonth() + 1;
    if (month < m || (month === m && now.getDate() < d)) years--;
    els[i].textContent = years;
  }
})();
