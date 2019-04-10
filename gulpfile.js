'use strict';

// init
var gulp        = require('gulp'),
    livereload = require('gulp-livereload'),
    watch       = require('gulp-watch'),                // Наблюдение за изменениями файлов
    prefixer    = require('gulp-autoprefixer'),         // Автоматически добавляет вендорные префиксы к CSS свойствам
    //rigger      = require('gulp-rigger'),               // Позволяет импортировать один файл в другой простой конструкцией
    sass        = require('gulp-sass'),                 // для компиляции нашего SCSS кода
    sourcemaps  = require('gulp-sourcemaps'),           // Для генерации css sourscemaps, помогает нам при отладке кода
    cssmin      = require('gulp-minify-css'),           // Сжатие CSS кода
    plumber     = require('gulp-plumber'),              // Ловим ошибки, чтобы не прервался watch
    browserSync = require('browser-sync')     // Синхронизация с браузером
    //reload = browserSync.reload;


// write rospritesmithuts
var path = {
        build: {
            // styles:        'local/templates/luster/'
            styles: 'src/'
        },
        src: {
            // styles:            'src/styles/*.*'
            styles: 'src/*.*'
        },
        watch: {
            styles:    'src/**/*.scss'
            //styles: 'src/*.sass',
        }
};

// styles
gulp.task('styles:build', function () {
    gulp.src(path.src.styles)               // Выберем наш main.scss
        .pipe(plumber())
        // .pipe(sourcemaps.init())            // То же самое что и с js
        .pipe(sass())                       // Скомпилируем
        .pipe(prefixer())                   // Добавим вендорные префиксы
        // .pipe(cssmin())                     // Сожмем
        // .pipe(sourcemaps.write())           // Пропишем карты
        // .pipe(plumber.stop())
        .pipe(gulp.dest(path.build.styles)) // И в build
        .pipe(browserSync.reload({stream: true}))
});


// styles
gulp.task('browser', function () {
    gulp.src("*.html")               // Выберем наш main.scss
        .pipe(plumber())
        .pipe(browserSync.reload({stream: true}))
});


gulp.task('build', [
    'styles:build'
]);

gulp.task('watch', function(){
    gulp.watch(path.watch.styles, ['styles:build' ])
    gulp.watch('*.html', ['browser' ])
});

gulp.task('browser-sync', function() {
    browserSync({

        server: {
            baseDir: "./"
        }

    });
});

gulp.task('default', ['build', 'watch', 'browser-sync']);
gulp.task('default-browser-sync', ['build', 'watch', 'browser-sync']);