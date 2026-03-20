@echo off
REM Git and GitHub Push Script
REM Make sure Git is installed first!

cd /d "c:\Users\alpag\OneDrive\Documents\FullStackApp"

echo [1/5] Initializing Git repository...
git init

echo [2/5] Adding all files...
git add .

echo [3/5] Creating initial commit...
git commit -m "Initial commit: Full-stack JavaScript app with Node.js backend and React frontend"

echo [4/5] Renaming branch to main...
git branch -M main

echo [5/5] Pushing to GitHub...
git remote add origin https://github.com/campustoolsio/Projects.git
git push -u origin main

echo.
echo ========================================
echo Project pushed to GitHub successfully!
echo Repository: https://github.com/campustoolsio/Projects
echo ========================================
pause
