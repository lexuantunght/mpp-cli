var gulp = require('gulp');
var consolidate = require('gulp-consolidate');
var iconfont = require('gulp-iconfont');
const argv = require('optimist').argv;

var runTimestamp = Math.round(Date.now() / 1000);

const inpDir = argv.i;
const outDir = argv.o;

gulp.task('iconfont', function () {
	return gulp
		.src([`${inpDir}/*.svg`]) // folder svg
		.pipe(
			iconfont({
				fontName: 'titan-font', // font name
				formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'], //format file font
				fontHeight: 1000,
				normalize: true,
				centerHorizontally: true,
				descent: 12,
				timestamp: runTimestamp,
			})
		)
		.on('glyphs', function (glyphs, options) {
			gulp.src('template/icon.css') // folder file css before
				.pipe(
					consolidate('lodash', {
						glyphs: glyphs,
						fontName: options.fontName,
						fontDate: Date.now(),
					})
				)
				.pipe(gulp.dest(outDir)); // folder file css after execute
		})
		.pipe(gulp.dest(outDir)); // folder font compiled
});