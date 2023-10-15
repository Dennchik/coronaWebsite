//* Обработка Html
const html = () => {
	return $.gulp.src($.path.html.src)
		.pipe($.gul.plumber({
			errorHandler: $.gul.notify.onError(error => ({
				title: "HTML",
				message: error.message
			}))
		}))
		.pipe($.gul.fileInclude())
		.pipe($.gul.webpHtml())
		.pipe($.gul.size({ title: "До сжатия-Html:" }))
		.pipe($.gul.htmlmin($.app.htmlMin))
		.pipe($.gul.size({ title: "После сжатия-Html:" }))
		.pipe($.gulp.dest($.path.html.dest));
}
module.exports = html;

