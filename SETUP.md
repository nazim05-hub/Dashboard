# Инструкция по настройке CI/CD

## Быстрый старт

После загрузки проекта на GitHub, CI/CD workflows будут автоматически активированы.

## Что уже настроено

✅ **GitHub Actions Workflows:**
- CI для backend и frontend
- Автоматическое тестирование и линтинг
- Сборка приложений
- Security audits
- Release workflow

✅ **Dependabot:**
- Автоматическое обновление зависимостей

✅ **Шаблоны:**
- Bug reports
- Feature requests
- Pull request template

## Первые шаги после загрузки на GitHub

1. **Проверьте workflows:**
   - Перейдите в раздел "Actions" вашего репозитория
   - Убедитесь, что workflows запускаются корректно

2. **Настройте ветки (опционально):**
   - Если используете другие названия веток (не `main`/`develop`), обновите workflows

3. **Добавьте badges в README:**
   ```markdown
   ![CI](https://github.com/your-username/monitor/workflows/CI/badge.svg)
   ```

4. **Настройте Secrets (если требуется для деплоя):**
   - Settings → Secrets and variables → Actions
   - Добавьте необходимые secrets

## Локальная проверка перед push

```bash
# Backend
cd backend
npm run lint
npm run test
npm run build

# Frontend
cd frontend
npm run lint
npm run type-check
npm run build
```

## Создание релиза

```bash
# Создайте тег версии
git tag v1.0.0

# Отправьте тег на GitHub
git push origin v1.0.0
```

GitHub Actions автоматически создаст Release с артефактами сборки.

## Troubleshooting

### Workflow не запускается

- Проверьте, что файлы workflows находятся в `.github/workflows/`
- Убедитесь, что ветка соответствует настройкам в `on:` секции workflow

### Тесты падают

- Запустите тесты локально: `npm run test`
- Проверьте логи в разделе Actions

### Линтинг не проходит

- Запустите линтер локально: `npm run lint`
- Исправьте ошибки или добавьте исключения в конфигурацию ESLint

## Дополнительная информация

См. [.github/README.md](.github/README.md) для подробной информации о workflows.


