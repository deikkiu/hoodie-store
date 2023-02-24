# SneakersEmpire

## Описание

SneakersEmpire — интернет-магазин кроссовок. Этот проект я написал для того, чтобы закрепить свои знания по React и попрактиковаться с React-router-dom. Также я впервые использовал React Skeleto.

## Функционал

- адаптирован для мобильных устройств,
- у всех интерактивных элементов есть анимация,
- вся информация о товарах (ссылки на фото, название, цена) подгружаются с сервера,
- закладки, оформленные заказы, товары в корзине также сохраняются на сервере,
- на сайте присутствует корзина, в которой можно увидеть итоговую сумму (цена товаров + доставка 5%), из нее также можно удалять товары
- покупка кроссовок,
- при удалении/добавлении товара в корзину обновляется соответствующая кнопка на карточке, общая сумма в корзине и в шапке сайта,
- сортировка товаров по цене,
- поиск товаров по названию,
- если поиск не дал результатов, то также появляется сообщение с рандомным эмодзи. Если продолжить вводить текст в строку поиска, то на каждый символ будет отображаться эмодзи
- использование прелоадеров,
- при клике на фото товара открывается модалка с товаром

## Технологии

- React,
- React Router,
- React Skeleton,
- Хуки (useState, useEffect, useContext, useRef),
- использование кастомных хуков (блокировка скролла, хук для подсчета суммы заказа),
- использование локального хранилища,
- работа с API (mockapi),
- HOC-компоненты,
- БЭМ,
- контроль версий в Git с использованием веток.

## Инструкция

Чтобы запустить проект, нужно сделать несколько простых шагов.

- Создайте папку и перейдите в неё:

```
cd <Имя-папки>
```

- Склонируйте этот репозиторий:

```
git clone git@github.com:deikkiu/sneakers-empire.git
```

- Установите все зависимости:

```
yarn или npm install
```

- Теперь можете запустить проект:

```
npm start или yarn start
```

## Системные требования

Для запуска потребуется Node.js версии 16.13.0.