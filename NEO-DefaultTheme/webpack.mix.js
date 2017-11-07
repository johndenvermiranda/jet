const { mix } = require('laravel-mix-jet');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files. 
 | Full API
 | mix.js(src, output);
 | mix.react(src, output); <-- Identical to mix.js(), but registers React Babel compilation.
 | mix.extract(vendorLibs);
 | mix.sass(src, output);
 | mix.standaloneSass('src', output); <-- Faster, but isolated from Webpack.
 | mix.fastSass('src', output); <-- Alias for mix.standaloneSass().
 | mix.less(src, output);
 | mix.stylus(src, output);
 | mix.postCss(src, output, [require('postcss-some-plugin')()]);
 | mix.browserSync('my-site.dev');
 | mix.combine(files, destination);
 | mix.babel(files, destination); <-- Identical to mix.combine(), but also includes Babel compilation.
 | mix.copy(from, to);
 | mix.copyDirectory(fromDir, toDir);
 | mix.minify(file);
 | mix.sourceMaps(); // Enable sourcemaps
 | mix.version(); // Enable versioning.
 | mix.disableNotifications();
 | mix.setPublicPath('path/to/public');
 | mix.setResourceRoot('prefix/for/resource/locators');
 | mix.autoload({}); <-- Will be passed to Webpack's ProvidePlugin.
 | mix.webpackConfig({}); <-- Override webpack.config.js, without editing the file directly.
 | mix.then(function () {}) <-- Will be triggered each time Webpack finishes building.
 | mix.options({
 |    extractVueStyles: false, // Extract .vue component styling to file, rather than inline.
 |    processCssUrls: true, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
 |    purifyCss: false, // Remove unused CSS selectors.
 |    uglify: {}, // Uglify-specific options. https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
 |    postCss: [] // Post-CSS options: https://github.com/postcss/postcss/blob/master/docs/plugins.md
 | });
 */

/*mix.browserSync({
    files: ['assets/css/!*.css', 'assets/js/!*.js', 'Views/!*.cshtml'],
    ui: false,
    server: false,
    open: false,
    ghostMode: false,
    injectChanges: true,
    proxy: 'localhost:5001'
});*/

mix.options({
    publicPath: './assets/',
    uglify: {
        compress: true,
        comment: false
    },
    clearConsole:true
});

mix.js('resources/js/app.js', 'js')
    .sourceMaps()
    .extract(['jquery', 'slick-carousel', 'perfect-scrollbar', 'inputmask', 'sweetalert2', 'easyzoom'])
    .version();

mix.sass('resources/sass/style.scss', 'css')
    .sourceMaps();