cp assets/libs/font-awesome/css/font-awesome.css assets/scss/_font-awesome.scss
cp assets/libs/font-awesome/fonts/* public/fonts/
cp assets/libs/verepo/_verepo.scss assets/scss/
curl https://raw.githubusercontent.com/ai/autoprefixer-rails/master/vendor/autoprefixer.js --create-dirs -o assets/libs/autoprefixer/autoprefixer.js
cp assets/libs/autoprefixer/autoprefixer.js assets/js/autoprefixer/
