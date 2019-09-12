# Exercises

## Identifiers

1. Define variable to store your name as a string.
2. Define constant to store your birth year as a number.
3. Prepare function to print greeting with single argument.
4. Call function passing value as literal.
5. Call function passing variable.
6. Call function passing constant.

## Loop

1. Print all odd numbers from the range [15, 30] including endpoints.
2. Implement function `range(start: number, end: number)` doing the same task.

## Function

1. Implement function `average` with signature
   `average(a: number, b: number): number` calculating average (arithmetic mean).
2. Implement function `square` with signature
   `square(x: number): number` calculating square of x.
3. Implement function `cube` with signature
   `cube(x: number): number` calculating cube of x.
4. Call functions `square` and `cube` in loop, then pass their results to
   function `average`. Print what `average` returns.

## Object

1. Define constant object with single field `name`.
2. Define variable object with single field `name`.
3. Try to change field `name` and assign other object to both identifiers.
   Explain script behaviour.
4. Implement function `createUser` with signature
   `createUser(name: string, city: string): object`. Example:
   `createUser('Marcus Aurelius', 'Roma')` will return object
   `{ name: 'Marcus Aurelius', city: 'Roma' }`

## Array

1. Define array of objects with two fields: `name` and `phone` (phone book).
   Example: `{ name: 'Marcus Aurelius', phone: '+380445554433' }`.
2. Implement function `findPhoneByName` with signature
   `findPhoneByName(name: string): string`. Returning phone from that object
   where field `name` equals argument `name`. Use `for` loop for this search.

## Hash

1. Define hash with `key` contains `name` (from previous example) and `value`
   contains `phone`.
2. Implement function `findPhoneByName` with signature
   `findPhoneByName(name: string): string`. Returning phone from hash/object.
   Use `hash[key]` to find needed phone.

# Упражнения

## Идентификаторы

1. Объявите переменную и запишите в нее свое имя как литерал строки.
2. Объявите константу и запишите в нее год своего рождения как литерал числа.
3. Создайте функцию, которая печатает приветствие и имеет один аргумент: `name`.
4. Вызовите эту функцию и передайте в нее имя как литерал строки.
5. Теперь вызовите функцию, передавая в нее переменную.
6. Вызовите функцию с константой в качестве аргумента.

## Циклы

1. Выведите все нечетные числа из диапазона [15, 30] включая крайние числа.
2. Реализуйте функцию `range(start: number, end: number)` которая выполняет
   предыдущую задачу.

## Функции

1. Реализуйте функцию `average` с сигнатурой
   `average(a: number, b: number): number` calculating average (arithmetic mean).
2. Реализуйте функцию `square` с сигнатурой
   `square(x: number): number` вычисляющую квадрат своего аргумента.
3. Реализуйте функцию `cube` с сигнатурой
   `cube(x: number): number` вычисляющую куб своего аргумента.
4. Вызовите функции `square` и `cube` в цикле, передавая результаты их исполнения
   в функцию `average`. Выведите результаты вызова `average`.

## Объекты

1. Создайте объект с одним полем `name` и присвойте его в константу.
2. Создайте объект с одним полем `name` и присвойте его в переменную.
3. Попробуйте поменять поле `name` у обоих объектов.
4. Попробуйте присвоить другой объект в оба идентификатора.
5. Объясните поведение кода.
6. Реализуйте функцию `createUser` с сигнатурой
   `createUser(name: string, city: string): object`. Пример вызова:
   `createUser('Marcus Aurelius', 'Roma')` функция должна вернуть объект
   `{ name: 'Marcus Aurelius', city: 'Roma' }`

## Массивы

1. Объявите массив объектов с двумя полями: `name` и `phone` для хранения
   телефонной книги. Пример: `{ name: 'Marcus Aurelius', phone: '+380445554433' }`
2. Реализуйте функцию `findPhoneByName` с сигнатурой
   `findPhoneByName(name: string): string`. Вызов функция должна находить объект,
   где поле `name` равно аргументу `name` и возвращать номер телефона из объекта.

## Коллекции: хеш-таблицы

1. Задайте хеш с ключами значениями поля `name` (из предыдущего примера)
   и значениями равными полю `phone`.
2. Реализуйте функцию `findPhoneByName` с сигнатурой
   `findPhoneByName(name: string): string` которая находит телефон в хеше по имени
   и возвращает номер телефона. Используйте `hash[key]` для поиска телефона.
