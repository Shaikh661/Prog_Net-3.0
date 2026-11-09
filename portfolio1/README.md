# Prog-Net 3.0 Documentation

A responsive, multi-section documentation website built with plain HTML, CSS, and JavaScript. No build step or package installation is required.

## Run locally

Open `index.html` in a browser, or serve this folder with the VS Code Live Server extension. Pages use the `?page=` query parameter, so individual documentation routes can be opened directly, for example:

- `index.html?page=chronicle/beginning`
- `index.html?page=products/handmade-marketplace`
- `index.html?page=development/architecture`

## Site structure

The documentation covers the project overview, Chronicle, People, Products, Development, The Road Ahead, and About. Page content and navigation are defined in `script.js`; shared structure and metadata are in `index.html`; visual styles and responsive behavior are in `style.css`.

The site includes a searchable page index, responsive navigation, breadcrumbs, on-page contents, and previous/next links.

## Content accuracy

Only details established by the project brief are stated as facts. Unconfirmed names, product capabilities, partnerships, technical specifications, dates, and commitments are marked as information to be supplied or verified. Update the corresponding page data in `script.js` only with reviewed project information.

## External resources

Google Fonts are requested online with system fallbacks. The site does not require external images or third-party JavaScript.
