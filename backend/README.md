# Backend - Remnawave Monitor API

NestJS backend для проксирования запросов к Remnawave API.

## Установка

```bash
npm install
```

## Настройка

Создайте файл `.env` в корне директории `backend`:

```
REMNAWAVE_API_URL=http://your-remnawave-api-url
REMNNAWAVE_API_KEY=your-api-key-here
PORT=4000
CORS_ORIGIN=http://localhost:5173
```

## Запуск

```bash
# Режим разработки
npm run start:dev

# Production
npm run build
npm run start:prod
```

## API Endpoints

- `GET /api/system/stats` - Получить общую статистику
- `GET /api/system/stats/bandwidth` - Получить статистику пропускной способности
- `GET /api/system/stats/nodes` - Получить статистику узлов
- `GET /api/system/health` - Получить статус здоровья системы
- `GET /api/system/nodes/metrics` - Получить метрики узлов


