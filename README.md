# Build Pipeline (yarn build)
1. Remove previous build folder (if it exists)
2. Build all SCSS files into one CSS file using node-sass
3. Run Parcel, which does the following:
  - Autoprefixes CSS with PostCSS autoprefixer
  - Transforms JS using Babel
  - Minifies HTML (PostHTML) and CSS (PostCSS cssnano)
  - Hashes file names