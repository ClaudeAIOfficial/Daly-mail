@echo off
echo Starting Daily Mail homepage clone on http://localhost:8080
start "" http://localhost:8080
py -m http.server 8080 || python -m http.server 8080
