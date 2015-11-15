# JS challenge

![](docs/animation.gif)

## Запуск сервера

В консоли из папки js-challenge/server выполнить команду npm start

## Начало разработки

В папке solution создать папку с вашим логином в GitHub.
В этой папке должно быть 2 файла: index.html и main.js

Начальное содержание файла index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JS challenge</title>
  <link rel="stylesheet" type="text/css" href="../../styles.css">
  <link rel="stylesheet" type="text/css" href="../../loader.css">
</head>
<body class="body loading">
  <div class="root">
    <a href="#" class="left"></a>
    <a href="#" class="right"></a>
    <div class="category">
      <p></p>
    </div>
    <img src="" alt="" title="">
    <div class="description">
      <p class="title"></p>
      <p class="content"></p>
    </div>
  </div>
  <div class="ball-triangle-path"><div></div><div></div><div></div></div>
  <div class="wrapper"></div>
  <script src="./main.js"></script>
</body>
</html>
```

Данные каждой новости можно получить по ссылке http://localhost:7777/news/id , где id это id конкретной новости.
При загрузки страници должна грузится новость с id = 1
