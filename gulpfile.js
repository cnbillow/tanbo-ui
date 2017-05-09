const gulp = require('gulp');
const gulpClean = require('gulp-clean');
const gulpInlineNg2Template = require('gulp-inline-ng2-template');
const htmlMin = require('html-minifier');
const gulpSass = require('gulp-sass');
const gulpAutoPrefix = require('gulp-autoprefixer');
const gulpCssMin = require('gulp-cssmin');
const gulpTypeScript = require('gulp-typescript');
const gulpConcat = require('gulp-concat');
const gulpSourceMap = require('gulp-sourcemaps');

const tsProject = gulpTypeScript.createProject('tsconfig.json');

gulp.task('clean', function () {
    return gulp.src('./bundles/', {
        read: false
    }).pipe(gulpClean());
});

gulp.task('copyFonts', ['clean'], function () {
    return gulp.src('./src/assets/fonts/angular-ui/fonts/**.*').pipe(gulp.dest('./bundles/fonts/'));
});

gulp.task('tsCompile', ['copyFonts'], function () {
    return gulp.src('./src/modules/**/*.ts')
        .pipe(gulpSourceMap.init())
        .pipe(gulpInlineNg2Template({
        useRelativePaths: true,
        templateProcessor(path, ext, file, cb) {
            try {
                let minifiedFile = htmlMin.minify(file, {
                    collapseWhitespace: true,
                    caseSensitive: true,
                    removeComments: true,
                    removeRedundantAttributes: true
                });
                cb(null, minifiedFile);
            }
            catch (err) {
                cb(err);
            }
        }
    })).pipe(tsProject())
        .pipe(gulpSourceMap.write('./maps'))
        .pipe(gulp.dest('./bundles/'));
});
gulp.task('scss', ['copyFonts'], function () {
    return gulp.src(['./src/assets/scss/index.scss', './src/assets/fonts/angular-ui/style.css', './node_modules/normalize.css/normalize.css'])
        .pipe(gulpSourceMap.init())
        .pipe(gulpSass())
        .pipe(gulpAutoPrefix())
        .pipe(gulpConcat({
            path: require('./package.json').name + '.min.css'
        }))
        .pipe(gulpCssMin())
        .pipe(gulpSourceMap.write('./maps'))
        .pipe(gulp.dest('./bundles'));
});


gulp.task('default', ['tsCompile', 'scss']);