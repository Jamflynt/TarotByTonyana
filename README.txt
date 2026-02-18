# Subconscious Specialist

Website for Tonyana Cruz — Subconscious Specialist. Built on the HTML5 UP Solid State template, migrated to Eleventy (11ty) with Nunjucks templates.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)

## Setup

```bash
npm install
```

## Local Development

Start the dev server with live reload:

```bash
npm start
```

This opens the site at **http://localhost:8080**. Any changes you make to files in `src/` will automatically rebuild and refresh the browser.

## Build for Production

```bash
npm run build
```

This generates the final static HTML files in the `_site/` directory.

## Deployment

The site deploys via cPanel Git. After building:

1. Commit your changes (including the `_site/` folder)
2. Push to GitHub
3. In cPanel > Git Version Control > Pull or Deploy > Update from Remote > Deploy HEAD Commit

## Project Structure

```
src/
  _data/           Site-wide variables (site.json, navigation.json)
  _includes/       Shared layouts and partials (base.njk, nav, footer, etc.)
  index.njk        Homepage
  about.njk        About page
  services.njk     Services & pricing page
  kind-words.njk   Client testimonials page
  contact.njk      Contact page
  assets/          CSS, JS, fonts (copied as-is to output)
  images/          Site images (copied as-is to output)
_site/             Generated output (do not edit directly)
```

To edit shared elements (nav, footer, contact form), update the partials in `src/_includes/partials/`. To change site-wide info (email, social links, copyright year), edit `src/_data/site.json`.
