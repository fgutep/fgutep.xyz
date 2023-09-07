@echo off
setlocal enabledelayedexpansion

REM Get the default gateway IP address
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| find "Default Gateway"') do (
    set "gateway=%%a"
    set "gateway=!gateway:~1!"
)

REM Check if a gateway IP was found
if not defined gateway (
    echo Default Gateway not found.
    pause
    exit /b
)

REM Open the default gateway in the default web browser
start http://%gateway%
