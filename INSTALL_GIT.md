# Установка Git для Windows

## Способ 1: Через официальный установщик (рекомендуется)

1. **Скачайте Git:**
   - Перейдите на https://git-scm.com/download/win
   - Скачайте установщик (автоматически выберется 64-bit версия)

2. **Установите Git:**
   - Запустите скачанный файл (например, `Git-2.43.0-64-bit.exe`)
   - Нажимайте "Next" на всех шагах (можно оставить настройки по умолчанию)
   - В конце нажмите "Install"

3. **Проверьте установку:**
   - Закройте и откройте PowerShell заново
   - Выполните команду:
   ```powershell
   git --version
   ```
   - Должна появиться версия Git (например, `git version 2.43.0`)

## Способ 2: Через winget (если установлен)

Откройте PowerShell от имени администратора и выполните:

```powershell
winget install --id Git.Git -e --source winget
```

## Способ 3: Через Chocolatey (если установлен)

```powershell
choco install git
```

## После установки Git

1. **Настройте Git (первый раз):**
   ```powershell
   git config --global user.name "Ваше Имя"
   git config --global user.email "ваш.email@example.com"
   ```

2. **Проверьте настройки:**
   ```powershell
   git config --list
   ```

3. **Теперь можно инициализировать проект:**
   ```powershell
   cd C:\Users\ADMIN\Desktop\monitor
   git init
   ```

## Если PowerShell не видит Git после установки

1. Закройте все окна PowerShell
2. Откройте PowerShell заново
3. Или перезагрузите компьютер

## Альтернатива: Использовать GitHub Desktop

Если не хотите работать с командной строкой, можете использовать GitHub Desktop:

1. Скачайте: https://desktop.github.com/
2. Установите и войдите в свой GitHub аккаунт
3. File → Add Local Repository → выберите папку `C:\Users\ADMIN\Desktop\monitor`
4. Нажмите "Publish repository" для загрузки на GitHub

