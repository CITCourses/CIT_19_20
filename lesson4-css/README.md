# Каскадні таблиці стилів (CSS)

Стилі можна підключити до елементу сторінки трьома способами:
1.  Всередині тегу прописати атрибут style, в якому задати необхідні стилі

```html
<div style="width: 100px; height: 100px; background-color: red;"></div>
```

![image](doc/1.png)

2.  В розділ ```html <head></head>``` додати тег ```html <style></style>```, в середині якого прописати необхідні стилі.

```html
  <head>
    <style>
      #block {
        width: 100px;
        height: 100px;
        background-color: red;
      }
    </style>
  </head>
  ...
  <div id="block"></div>
```

3.  Прописати стилі в окремому файлі з розширенням _css_. Підключити цей файл за допомогою тегу ```html <link>```  всередині розділу ```html <head></head>```

_Файл **style.css**_ 

```css
#block {
  width: 100px;
  height: 100px;
  background-color: red;
}
```

_Файл **index.html**_

```html
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  <body>
    <div id="block"></div>
  </body>
</html>
```

## Селектори
Для того, щоб можна було ставити у відповідність стиль до якихось елементів на сторінці використовуються Селектори (Selectors)

Селектор в css | Код в html                                | Опис
-------------- | ----------------------------------------- |
```#name```    | ``` <div id ="name"><table id="name">```  | Ідентифікатор елементу. У кожного елементу може бути унікальний ідентифікатор
