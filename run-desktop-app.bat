@echo off
REM Full Stack Desktop App Launcher
REM This script starts your desktop application

echo.
echo ================================
echo Full Stack Desktop App
echo ================================
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
    if errorlevel 1 (
        echo.
        echo ERROR: Failed to install Node.js modules
        echo Make sure Node.js is installed: https://nodejs.org
        pause
        exit /b 1
    )
    echo Dependencies installed!
    echo.
)

REM Check if frontend build exists
if not exist "frontend\build" (
    echo Building React frontend...
    call npm run build-frontend
    if errorlevel 1 (
        echo.
        echo ERROR: Failed to build frontend
        pause
        exit /b 1
    )
    echo Frontend built successfully!
    echo.
)

REM Start the app
echo Starting Full Stack Desktop App...
echo.
echo Backend will start automatically
echo Frontend will load at http://localhost:3000
echo.
echo Press Ctrl+C to stop the application
echo.

call npm run dev

pause
