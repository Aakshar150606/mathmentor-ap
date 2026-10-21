@echo off
echo ========================================================
echo   MathMentor AP - Starting Backend and Frontend Servers
echo ========================================================
echo.

echo [1/3] Starting Backend Server on http://localhost:5000 ...
start "MathMentor Backend" cmd /k "cd /d %~dp0server && npm run dev"

timeout /t 3 /nobreak >nul

echo [2/3] Starting Frontend Client on http://localhost:5173 ...
start "MathMentor Frontend" cmd /k "cd /d %~dp0client && npm run dev"

timeout /t 3 /nobreak >nul

echo [3/3] Opening MathMentor in your browser ...
start http://localhost:5173

echo.
echo ========================================================
echo   MathMentor AP is running!
echo   Frontend: http://localhost:5173
echo   Backend:  http://localhost:5000
echo   Demo Login: teacher@mathmentor.ap / Teacher@123
echo ========================================================
pause
