# Recipes App

Данный проект содержит два модуля:
- **Backend**: Django REST API с автодокументацией Swagger
- **Fontend**: React-приложение с маршрутизацией и неоновым оформлением

## Структура проекта

```
Project Root/
├── Backend/
│   ├── manage.py
│   ├── Backend/       # Корень Django-проекта
│   ├── recipes/       # Приложение с моделями и API
│   └── reuirements.txt 
├── Fontend/
│   ├── package.json
│   ├── public/
│   └── src/
│       ├── App.js
│       ├── index.js
│       ├── index.css
│       └── pages/
│           ├── Home.js
│           ├── CategoryPage.js
│           └── RecipePage.js
└── README.md
```

## Настройка Backend

1. **Установка зависимостей:**
   ```bash
   cd Backend
   pip install -r requirements.txt
   ```

2. **Миграции и запуск сервера:**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   python manage.py runserver
   ```
4. **Админка:**
   Создайте суперпользователя:
   ```bash
   python manage.py createsuperuser
   ```
   Админка будет доступна по адресу: [http://localhost:8000/admin/](http://localhost:8000/admin/)

5. **Документация API:**
   Документация (Swagger) доступна по адресу: [http://localhost:8000/swagger/](http://localhost:8000/swagger/)

## Настройка Fontend

1. **Установка зависимостей:**
   ```bash
   cd Fontend
   npm install
   ```

2. **Запуск проекта:**
   ```bash
   npm start
   ```
   Приложение запустится на [http://localhost:3000](http://localhost:3000).

