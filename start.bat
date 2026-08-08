@echo off
setlocal enabledelayedexpansion
cd /d "%~dp0"

echo ==============================================
echo  Grids Gold - Local Dev Startup
echo ==============================================
echo.

if not exist ".env" (
    echo [setup] No .env found - copying .env.example
    copy ".env.example" ".env" >nul
    php artisan key:generate
    echo.
    echo [!] .env was just created from .env.example.
    echo [!] Check DB_HOST / DB_PORT / DB_USERNAME / DB_PASSWORD match your
    echo [!] local MySQL before continuing, then re-run this script.
    pause
    exit /b 1
)

if not exist "vendor" (
    echo [setup] vendor\ missing - running composer install...
    call composer install
    if errorlevel 1 (
        echo [!] composer install failed.
        pause
        exit /b 1
    )
)

if not exist "node_modules" (
    echo [setup] node_modules\ missing - running npm install...
    call npm install
    if errorlevel 1 (
        echo [!] npm install failed.
        pause
        exit /b 1
    )
)

if not exist "public\js\bundle" (
    echo [setup] Compiled frontend assets missing - running npm run dev...
    call npm run dev
    if errorlevel 1 (
        echo [!] Frontend build failed.
        pause
        exit /b 1
    )
)

echo.
echo [1/4] Running central database migrations...
php artisan migrate --force
if errorlevel 1 (
    echo [!] Central migration failed. Check your DB connection in .env.
    pause
    exit /b 1
)

echo.
echo [2/4] Ensuring the shared jewelry tenant exists (db: quantrocousr_tenant_jewelry)...
php artisan tenant:ensure-jewelry --migrate
if errorlevel 1 (
    echo [!] Failed to set up the jewelry tenant.
    pause
    exit /b 1
)

echo.
echo [3/4] Ensuring the public storage symlink exists...
if not exist "public\storage" (
    php artisan storage:link
)

echo.
echo [4/4] Starting the dev server on http://127.0.0.1:8000 ...
echo.
echo   Central/SaaS admin :  http://localhost:8000
echo   Jewelry tenant     :  http://jewelry.localhost:8000
echo.
echo   NOTE: if jewelry.localhost doesn't resolve, add this line to
echo   C:\Windows\System32\drivers\etc\hosts (as Administrator):
echo       127.0.0.1  jewelry.localhost
echo.
echo   Press Ctrl+C to stop the server.
echo.

php artisan serve --host=127.0.0.1 --port=8000
