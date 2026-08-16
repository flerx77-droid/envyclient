ПАПКА ДЛЯ СКАЧИВАНИЙ
=====================

Сайт раздаётся на GitHub Pages:
    https://flerx77-droid.github.io/envyclient/

Кнопка «Скачать лаунчер» ведёт на установщик в GitHub Releases:
    https://github.com/flerx77-droid/envyclient/releases/download/v1.0.0/EnvyClient-Setup-1.0.0.exe

Как обновить сайт
------------------
1. Правь файлы прямо в папке этого сайта (index.html, css/, js/, img/).
2. Заливай изменения в репозиторий envyclient (ветка main, корень).
   Через git:
     git add .
     git commit -m "update"
     git push origin main
   Через веб: «Code → Add file → Upload files» (мелкие файлы до 25 МБ).

GitHub Pages подхватит изменения автоматически за ~1 минуту.

Как выпустить новую версию лаунчера
-------------------------------------
1. Собери:  C:\Users\user\Desktop\envyclient-dlc\launcher
   cd launcher
   $env:CSC_IDENTITY_AUTO_DISCOVERY = "false"
   npm run dist
   Иконка на приложение ставится автоматически (хук afterPack).
   Не забудь поднять версию в package.json ("version": "X.Y.Z").
2. Подними версию и создай новый релиз с новым тегом (v1.1.1, v1.2.0 и т.д.).
3. Заливай установщик в релиз СТРОГО под именем EnvyClient-Setup.exe
   (тогда кнопка на сайте всегда ведёт на свежую версию через "latest",
   и лаунчер сам найдёт обновление — он берёт первый *.exe из последнего релиза).
   Сайт правки не требует.

Ссылка кнопки на сайте:
    https://github.com/flerx77-droid/envyclient/releases/latest/download/EnvyClient-Setup.exe

Конфиги и данные клиента хранятся в  C:\envyclient
(лаунчер сам создаёт джанкшн из папки игры, ничего делать не нужно).