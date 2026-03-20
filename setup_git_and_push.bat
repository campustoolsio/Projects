@echo off
REM Git Configuration and GitHub Push Script
REM Run this AFTER installing Git

echo ========================================
echo Git Configuration & GitHub Push Setup
echo ========================================
echo.

cd /d "c:\Users\alpag\OneDrive\Documents\FullStackApp"

echo [1/6] Configuring Git user name...
git config --global user.name "Your Name"

echo [2/6] Configuring Git email (alpage92@gmail.com)...
git config --global user.email "alpage92@gmail.com"

echo [3/6] Initializing Git repository...
git init

echo [4/6] Adding all files to Git...
git add .

echo [5/6] Creating initial commit...
git commit -m "Initial commit: Full-stack JavaScript app with Node.js backend and React frontend"

echo [6/6] Setting up GitHub remote and pushing...
git branch -M main
git remote add origin https://github.com/campustoolsio/Projects.git

echo.
echo Pushing to GitHub (you may be prompted for authentication)...
git push -u origin main

echo.
echo ========================================
echo SUCCESS! Your project is now on GitHub!
echo Repository: https://github.com/campustoolsio/Projects
echo ========================================
echo.
pause
