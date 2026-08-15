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
1. Собери:  C:\Users\user\Desktop\wyvern-dlc\launcher
   cd launcher
   $env:CSC_IDENTITY_AUTO_DISCOVERY = "false"
   npm run dist
2. Поставь иконку (необязательно, если не менялась):
   ResourceHacker.exe -open "dist\EnvyClient Setup.exe" -save "dist\EnvyClient Setup.exe" -action addoverwrite -res resources\icon.ico -mask "ICONGROUP,MAINICON," -log NUL
3. Создай новый релиз с новым тегом (v1.0.1 и т.д.) и залей новый exe.
   Тогда кнопка на сайте продолжит работать через "latest" без правок сайта:
   .../releases/latest/download/...