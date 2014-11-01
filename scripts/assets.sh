cp public/libs/font-awesome/css/font-awesome.css public/css/_font-awesome.scss
cp public/libs/font-awesome/fonts/* public/fonts/
cp public/libs/verepo/_verepo.scss public/css/
curl https://raw.githubusercontent.com/ai/autoprefixer-rails/master/vendor/autoprefixer.js --create-dirs -o public/libs/autoprefixer/autoprefixer.js
cp public/libs/autoprefixer/autoprefixer.js public/js/autoprefixer/
