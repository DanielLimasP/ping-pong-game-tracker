Write-Host "`n dev.ps1 v1.0.0" -ForegroundColor "black" -BackgroundColor "cyan"
Write-Host "`n Starting development environment... `n"  -ForegroundColor "cyan"

Start-Process wt "npm run dev:watch"
Start-Process wt "npm run start"