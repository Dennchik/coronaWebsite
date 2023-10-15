global.$ = {
//*	Пакеты
	gulp: require("gulp"),
	gul: require("gulp-load-plugins")(),
	browserSync: require("browser-sync").create(),
	webpack: require("webpack-stream"),
	gulpIf: require("gulp-if"),
	del: require("del"),
	//* Конфигурация
	path: require("./config/path.js"),
	app: require("./config/app.js"),
}
//* Задачи
const requireDir = require("require-dir");
const task = requireDir("./task", { recurse: true });
//* Observation
const watcher = () => {
	$.gulp.watch($.path.html.watch, task.html).on("all", $.browserSync.reload);
	$.gulp.watch($.path.css.watch, task.css).on("all", $.browserSync.reload);
	$.gulp.watch($.path.js.watch, task.js).on("all", $.browserSync.reload);
	$.gulp.watch($.path.image.watch, task.image).on("all", $.browserSync.reload);
	$.gulp.watch($.path.fonts.watch, task.fonts).on("all", $.browserSync.reload);
}

const end = $.gulp.series(
	task.clear,
	$.gulp.parallel(task.html, task.css, task.js, task.image, task.fonts),
);

const dev = $.gulp.series(
	end,
	$.gulp.parallel(watcher, task.server),
);

//* Вызов
exports.clear = task.clear;
exports.clearEnd = task.clearEnd;
exports.html = task.html;
exports.css = task.css;
exports.js = task.js;
exports.image = task.image;
exports.fonts = task.fonts;
exports.watch = watcher;
exports.final = task.final;
//*Сборка
exports.default = $.app.isProd
	? end
	: dev;

exports.final = $.gulp.series(
	task.clearEnd,
	task.final,
	task.server
);



