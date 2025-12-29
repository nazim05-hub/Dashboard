# Руководство по внесению вклада

Спасибо за интерес к проекту! Мы приветствуем вклад от сообщества.

## Процесс разработки

1. **Fork** репозиторий
2. Создайте **feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit** ваши изменения (`git commit -m 'Add some AmazingFeature'`)
4. **Push** в branch (`git push origin feature/AmazingFeature`)
5. Откройте **Pull Request**

## Стандарты кода

### TypeScript

- Используйте TypeScript для всех новых файлов
- Избегайте использования `any` типа, где это возможно
- Добавьте типы для всех функций и переменных

### Линтинг

Перед коммитом убедитесь, что код проходит линтинг:

```bash
# Backend
cd backend
npm run lint

# Frontend
cd frontend
npm run lint
```

### Форматирование

Используйте Prettier для форматирования кода:

```bash
# Backend
cd backend
npm run format

# Frontend (если настроен)
cd frontend
npx prettier --write "src/**/*.{ts,tsx}"
```

### Тесты

- Напишите тесты для новых функций
- Убедитесь, что все существующие тесты проходят
- Стремитесь к покрытию кода тестами > 80%

```bash
# Backend
cd backend
npm run test
npm run test:cov
```

## Структура коммитов

Используйте понятные сообщения коммитов:

- `feat: добавлена новая функция`
- `fix: исправлена ошибка в компоненте Dashboard`
- `docs: обновлена документация`
- `refactor: рефакторинг SystemService`
- `test: добавлены тесты для SystemController`

## Pull Request

При создании PR убедитесь:

- [ ] Код проходит линтинг
- [ ] Все тесты проходят
- [ ] Добавлены тесты для новых функций
- [ ] Обновлена документация (если необходимо)
- [ ] PR имеет понятное описание изменений

## Вопросы?

Если у вас есть вопросы, откройте issue или свяжитесь с maintainers проекта.


