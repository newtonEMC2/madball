'use strict';

/////////////////////////
//dependencies
/////////////////////////

var     gulp = require('gulp'),
        sass = require('gulp-sass'),
        maps = require('gulp-sourcemaps'),
        autoprefixer = require('gulp-autoprefixer'),
        //useref = require('gulp-useref'),
        //imagemin = require('gulp-imagemin'),
        //babel = require('gulp-babel'),
        browserSync = require('browser-sync'),
        //uncss = require('gulp-uncss'),
        //gulpif = require('gulp-if'),
        concat = require('gulp-concat'),
        uglify = require('gulp-uglify');


/////////////////////////
//tasks
/////////////////////////

//reload
gulp.task("BrowserSync", () => {
    return browserSync.init({
        server: {
            baseDir: 'dist'
        }
    })
})

//sass
gulp.task("Sass", function(){
    return gulp.src("src/scss/application.scss")
        .pipe(maps.init())
        .pipe(sass({
            //options: nested(by default), compressed, compact, expanded
            outputStyle: 'compressed'
            })
        )
        //.on('error', console.error.bind(console))
        .on('error', sass.logError)
        .pipe(autoprefixer({
            versions: ['last two browsers']
        }))
        
        .pipe(maps.write('./'))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

//html
gulp.task("HTML", () => {
    return gulp.src("src/**/*.html")
        .pipe(gulp.dest("dist"))
        .pipe(browserSync.stream())
})

//js
gulp.task("JS", () => {
    return gulp.src([
    //the same way we do with jquery, the libraries are called first.
    //The order in which de rest of the files are called in, is not relevant
        "src/js/madball-app/basicLibrary.js",
        "src/js/madball-app/config.js",
        "src/js/madball-app/model.js",
        "src/js/madball-app/controller.js",
        "src/js/madball-app/controller.js",
        
        "src/js/ui.js"
    ])
    .pipe(concat("app.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"))
    .pipe(browserSync.stream())
})

//img
gulp.task("ASSETS", () => {
    return gulp.src("src/assets/*.{PNG,svg,jpg,png,gif}")
    .pipe(gulp.dest("dist/assets"))
    .pipe(browserSync.stream())
})



/////////////////////////
//watchers
/////////////////////////

gulp.task("Watcher", () => {
    gulp.watch("src/scss/**/*.scss", ["Sass"]);
    gulp.watch("src/**/*.html", ["HTML"]);
    gulp.watch("src/**/*.js", ["JS"]);
    gulp.watch("src/assets/*.{PNG,svg,jpg,png,gif}", ["ASSETS"]);
});



/////////////////////////
//default
/////////////////////////
gulp.task("default", ["Sass",
                      "HTML",
                      "JS",
                      "ASSETS",
                      "BrowserSync",
                      "Watcher"]
);