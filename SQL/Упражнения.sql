Схема БД состоит из четырех таблиц:
Product(maker, model, type)
PC(code, model, speed, ram, hd, cd, price)
Laptop(code, model, speed, ram, hd, price, screen)
Printer(code, model, color, type, price)
Таблица Product представляет производителя (maker), номер модели (model) и тип ('PC' - ПК, 'Laptop' - ПК-блокнот или 'Printer' - принтер). 
Предполагается, что номера моделей в таблице Product уникальны для всех производителей и типов продуктов. 
В таблице PC для каждого ПК, однозначно определяемого уникальным кодом – code, указаны модель – model (внешний ключ к таблице Product), 
скорость - speed (процессора в мегагерцах), объем памяти - ram (в мегабайтах), размер диска - hd (в гигабайтах), 
скорость считывающего устройства - cd (например, '4x') и цена - price (в долларах). 
Таблица Laptop аналогична таблице РС за исключением того, что вместо скорости CD содержит размер экрана -screen (в дюймах). 
В таблице Printer для каждой модели принтера указывается, является ли он цветным - color ('y', если цветной), 
тип принтера - type (лазерный – 'Laser', струйный – 'Jet' или матричный – 'Matrix') и цена - price.
***************************

Задание: 1
Найдите номер модели, скорость и размер жесткого диска для всех ПК стоимостью менее 500 дол. Вывести: model, speed и hd

SELECT model, speed,hd FROM pc
WHERE price < 500;
=================================

Задание: 2
Найдите производителей принтеров. Вывести: maker

SELECT DISTINCT maker
FROM product
WHERE type = 'printer'
=================================

Задание: 3
Найдите номер модели, объем памяти и размеры экранов ПК-блокнотов, цена которых превышает 1000 дол.

SELECT model, ram, screen
FROM laptop
WHERE price > 1000
=================================

Задание: 4
Найдите все записи таблицы Printer для цветных принтеров.

SELECT *
FROM printer
WHERE color = 'y'
=================================

Задание: 5
Найдите номер модели, скорость и размер жесткого диска ПК, имеющих 12x или 24x CD и цену менее 600 дол.

SELECT model, speed, hd
FROM pc
WHERE (cd = '12x'OR cd = '24x') AND price < 600
=================================

Задание: 6
Для каждого производителя, выпускающего ПК-блокноты c объёмом жесткого диска 
не менее 10 Гбайт, найти скорости таких ПК-блокнотов. Вывод: производитель, скорость.

SELECT DISTINCT maker, speed FROM product
JOIN laptop ON product.model = laptop.model
WHERE hd >= 10
=================================
Задание: 7
Найдите номера моделей и цены всех имеющихся в продаже продуктов (любого типа) производителя B (латинская буква).

SELECT laptop.model, price FROM product
JOIN laptop ON product.model = laptop.model
WHERE maker = 'B'
UNION
SELECT pc.model,price FROM  product
JOIN pc ON product.model = pc.model
WHERE maker = 'B'
UNION
SELECT printer.model, price FROM product
JOIN printer ON product.model = printer.model
WHERE maker = 'B';



