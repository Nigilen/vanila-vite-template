"use strict"
import gulp from "gulp"
import ttf2woff from "gulp-ttf2woff"
import ttfToWoff2 from "gulp-ttftowoff2"

const SOURCE_FONT = "public/fonts/*.ttf"
const DESTINATION_FONT = "public/fonts"

const woff = () => {
	return gulp
		.src(SOURCE_FONT)
		.pipe(ttf2woff())
		.pipe(gulp.dest(DESTINATION_FONT))
}
const woff2 = () => {
	return gulp
		.src(SOURCE_FONT)
		.pipe(ttfToWoff2())
		.pipe(gulp.dest(DESTINATION_FONT))
}

// npm run gulp
// следите за версией node.js
// запуск команд можно смотреть в package.json
gulp.task("generate-fonts", gulp.series(woff, woff2))
