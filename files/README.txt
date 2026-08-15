ПАПКА ДЛЯ СКАЧИВАНИЙ
=====================

Главный файл, который скачивают пользователи, теперь лежит на GitHub Releases:

    https://github.com/flerx77-droid/envyclient/releases/download/v1.0.0/EnvyClient-Setup-1.0.0.exe

Именно на него ведёт кнопка «Скачать лаунчер» на сайте (index.html).

Как собрать и залить новую версию
----------------------------------

Лаунчер лежит в проекте:  C:\Users\user\Desktop\wyvern-dlc\launcher

1. Убедись, что в папке лежит собранный мод:
   launcher\resources\mods\envyclient.jar
   (собери:  .\gradlew.bat build  и скопируй build\libs\envyclient-0.1-recode.jar)

2. Собери под Windows:
   cd launcher
   $env:CSC_IDENTITY_AUTO_DISCOVERY = "false"
   npm run dist

   Установщик появится в launcher\dist\EnvyClient Setup.exe.
   Чтобы поставить на него иконку, прошей её Resource Hacker'ом:
   ResourceHacker.exe -open "<exe>" -save "<exe>" -action addoverwrite -res resources\icon.ico -mask "ICONGROUP,MAINICON," -log NUL

3. Заливай новый exe на GitHub Releases (github.com/flerx77-droid/envyclient/releases):
   новая версия = новый тег (v1.0.1, v1.1.0 и т.д.).
   Тогда кнопка на сайте продолжит вести на "latest" — менять index.html не нужно,
   если использовать ссылку вида .../releases/latest/download/...