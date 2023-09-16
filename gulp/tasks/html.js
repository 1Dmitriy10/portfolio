// import include from 'gulp-include';
import fileInclude from "gulp-file-include";
import versionNumber from 'gulp-version-number';
export const html = () => {
    return app.gulp.src(app.path.src.html)     //Получаем путь к папке с исходниками из глобального объекта
    .pipe(app.plugins.plumber(                      //Ошибки в виндоус
        app.plugins.notify.onError({
            title: "HTML",
            message: "Error: <%= error.message %>"
        })
    ))
    // .pipe(include({
    //     includePaths: `src/html`                //Где брать компоненты
    // }))
    .pipe(fileInclude())
    .pipe(app.plugins.replace(/@img\//g, 'img/')) //Замена путей к файлам
    .pipe(app.plugins.if(
        app.isBuild, versionNumber({                           //Кэширевание
            'value': '%DT%',
            'append': {
                'key': '_v',
                'cover': 0,
                'to': [
                    'css',
                    'js',
                ]
            },
            'output': {
                'file': 'gulp/version.json'
            }
        })
    ) )
    .pipe(app.gulp.dest(app.path.build.html))                  //Указываем куда перенести файлы HTML
    .pipe(app.plugins.browserSync.stream())                 //Обновления в браузере
}              