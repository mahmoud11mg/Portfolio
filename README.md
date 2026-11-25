# Mahmoud Mohamed — Portfolio

A static HTML/CSS/JavaScript portfolio with two language versions:

- `index.html` — English (LTR)
- `index-ar.html` — Arabic (RTL)

## Run locally

1. Open this folder in Visual Studio Code.
2. Start the **Live Server** extension from `index.html`.
3. Open `index-ar.html` to preview the Arabic version.

No npm install, build step, or server-side runtime is required.

## Runtime structure

- `assets/css/bootstrap.min.css` — Bootstrap 5 layout and component styles
- `assets/css/effects.css` — the two hover effects used by the site
- `assets/css/font-awesome.css` and `assets/fonts/` — Font Awesome icons
- `assets/css/swiper.css` — testimonial slider styles
- `assets/css/media.css`, `staylemahmoud.css`, `style.css` — portfolio styles
- `assets/css/rtl.css` — Arabic-only RTL overrides
- `assets/js/vendor.js` — Swiper 5.4 only
- `assets/js/main.js` — theme, responsive navigation, smooth scrolling, testimonial slider, project filtering, and accessible modals

## Editing styles

Editable Sass sources are retained:

- `assets/css/style.scss`
- `assets/css/staylemahmoud.scss`
- `assets/css/media.scss`
- `assets/css/_styleimpo.scss`

Browsers load the compiled `.css` files. Compile the Sass sources after editing them.

## Deployment

Upload the contents of this folder to the root of the GitHub Pages repository. Keep the `assets/` directory and relative paths unchanged. The résumé PDF is located at:

`assets/Mahmoud_Mohammed_Front-End_Developer.pdf`

## Cleanup

Removed unused legacy Bootstrap 4 code, the unused Bootstrap JavaScript bundle, jQuery/Isotope (project filtering is now native), unused slider-adjacent plugins, the full Hover.css library, duplicate minified stylesheets, source maps, unused icon fonts, commented-out sections, and unreferenced images. The remaining JavaScript is limited to the testimonial slider and interactions actually used by the site.
