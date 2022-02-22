Write-Host "`n init.ps1 v1.0.0" -ForegroundColor "black" -BackgroundColor "cyan"
Write-Host "`n Building... "  -ForegroundColor "cyan"

powershell "npm run build"
powershell "npm run start"