# Remnawave Monitor

Приложение для мониторинга серверов Remnawave с использованием NestJS (backend) и React с Mantine UI (frontend).

## Структура проекта

```
monitor/
├── backend/          # NestJS приложение
│   ├── src/
│   │   ├── system/  # Модуль для работы с Remnawave API
│   │   └── main.ts
│   └── package.json
├── frontend/         # React приложение с Mantine UI
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   └── App.tsx
│   └── package.json
└── README.md
```

## Установка и запуск

### Backend (NestJS)

1. Перейдите в директорию backend:
```bash
cd backend
```

2. Установите зависимости:
```bash
npm install
```

3. Создайте файл `.env` на основе `env.example`:
```bash
# Windows (PowerShell)
Copy-Item env.example .env

# Linux/Mac
cp env.example .env
```

4. Настройте переменные окружения в `.env`:
```
REMNAWAVE_API_URL=http://your-remnawave-api-url
REMNNAWAVE_API_KEY=your-api-key-here
PORT=4000
CORS_ORIGIN=http://localhost:5173
```

5. Запустите сервер разработки:
```bash
npm run start:dev
```

Backend будет доступен на `http://localhost:4000`

### Frontend (React + Mantine)

1. Перейдите в директорию frontend:
```bash
cd frontend
```

2. Установите зависимости:
```bash
npm install
```

3. Запустите сервер разработки:
```bash
npm run dev
```

Frontend будет доступен на `http://localhost:5173`

## API Endpoints

Backend предоставляет следующие endpoints:

- `GET /api/system/stats` - Получить общую статистику
- `GET /api/system/stats/bandwidth` - Получить статистику пропускной способности
- `GET /api/system/stats/nodes` - Получить статистику узлов
- `GET /api/system/health` - Получить статус здоровья системы
- `GET /api/system/nodes/metrics` - Получить метрики узлов

## Функциональность

- ✅ Отображение статуса здоровья системы
- ✅ Мониторинг общей статистики
- ✅ Статистика пропускной способности
- ✅ Статистика и метрики узлов
- ✅ Автоматическое обновление данных каждые 30 секунд
- ✅ Адаптивный дизайн с использованием Mantine UI

## CI/CD

Проект использует GitHub Actions для автоматизации CI/CD процессов:

### Workflows

- **`.github/workflows/ci.yml`** - Основной CI workflow, запускается при push и pull requests
  - Тестирование и линтинг backend
  - Тестирование и линтинг frontend
  - Проверка типов TypeScript
  - Сборка приложений

- **`.github/workflows/backend.yml`** - Специализированный workflow для backend
  - Тестирование на Node.js 18.x и 20.x
  - Линтинг кода
  - Запуск unit тестов
  - Генерация coverage отчетов
  - Security audit

- **`.github/workflows/frontend.yml`** - Специализированный workflow для frontend
  - Тестирование на Node.js 18.x и 20.x
  - Линтинг кода
  - Проверка типов TypeScript
  - Сборка приложения
  - Security audit

- **`.github/workflows/release.yml`** - Workflow для создания релизов
  - Запускается при создании тега версии (v*.*.*)
  - Сборка production версий
  - Создание GitHub Release с артефактами

### Dependabot

Автоматическое обновление зависимостей через Dependabot (еженедельно).

### Badges (опционально)

Добавьте в README для отображения статуса CI:

```markdown
![CI](https://github.com/your-username/monitor/workflows/CI/badge.svg)
```

## Технологии

- **Backend**: NestJS, TypeScript, Axios
- **Frontend**: React, TypeScript, Mantine UI, Vite
- **Стилизация**: Mantine Core Components
- **CI/CD**: GitHub Actions

