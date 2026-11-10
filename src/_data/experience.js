// Tonyana's professional start date. Years of experience are counted from it at
// build time (meta descriptions, structured data, page text), and the page text is
// kept current in the browser by assets/js/years.js between deploys.
// Default export only: Eleventy uses the whole module as data if there are named exports.
const SINCE = "2008-08-08";

function yearsSince(iso, now) {
  const [y, m, d] = iso.split("-").map(Number);
  let years = now.getFullYear() - y;
  const month = now.getMonth() + 1;
  if (month < m || (month === m && now.getDate() < d)) years--;
  return years;
}

export default function () {
  return {
    since: SINCE,
    years: yearsSince(SINCE, new Date())
  };
}
