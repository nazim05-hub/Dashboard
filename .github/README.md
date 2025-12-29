# GitHub Actions Workflows

Этот проект использует GitHub Actions для автоматизации CI/CD процессов.

## Доступные Workflows

### 1. CI (`ci.yml`)

Основной workflow, который запускается при каждом push и pull request в ветки `main`, `develop`, `master`.

**Выполняет:**
- Тестирование и линтинг backend
- Тестирование и линтинг frontend
- Проверку типов TypeScript
- Сборку приложений

### 2. Backend CI/CD (`backend.yml`)

Специализированный workflow для backend, запускается при изменениях в директории `backend/`.

**Выполняет:**
- Тестирование на Node.js 18.x и 20.x
- Линтинг кода
- Запуск unit тестов
- Генерацию coverage отчетов
- Security audit
- Сборку приложения

### 3. Frontend CI/CD (`frontend.yml`)

Специализированный workflow для frontend, запускается при изменениях в директории `frontend/`.

**Выполняет:**
- Тестирование на Node.js 18.x и 20.x
- Линтинг кода
- Проверку типов TypeScript
- Сборку приложения
- Security audit

### 4. Release (`release.yml`)

Workflow для создания релизов, запускается при создании тега версии (формат: `v*.*.*`).

**Выполняет:**
- Сборку production версий backend и frontend
- Создание GitHub Release с артефактами сборки

**Использование:**
```bash
git tag v1.0.0
git push origin v1.0.0
```

## Dependabot

Автоматическое обновление зависимостей настроено через Dependabot:
- Проверка обновлений: еженедельно
- Максимум открытых PR: 5 на экосистему
- Автоматические метки: `dependencies`, `backend`/`frontend`

## Шаблоны Issues и Pull Requests

Проект включает шаблоны для:
- **Bug reports** - стандартизированные отчеты об ошибках
- **Feature requests** - запросы новых функций
- **Pull requests** - чеклист для проверки PR

## Настройка Secrets

Для работы некоторых workflows может потребоваться настройка GitHub Secrets:

1. Перейдите в Settings → Secrets and variables → Actions
2. Добавьте необходимые secrets (если требуется для деплоя)

## Статус Badges

Добавьте в README для отображения статуса:

```markdown
![CI](https://github.com/your-username/monitor/workflows/CI/badge.svg)
![Backend CI](https://github.com/your-username/monitor/workflows/Backend%20CI%2FCD/badge.svg)
![Frontend CI](https://github.com/your-username/monitor/workflows/Frontend%20CI%2FCD/badge.svg)
```


