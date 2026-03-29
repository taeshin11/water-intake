#!/usr/bin/env bash
# Water Intake Calculator — project bootstrap
set -e

echo "==> Starting local dev server..."

# Try Python 3 first, fallback to Python 2, then npx serve
if command -v python3 &>/dev/null; then
  echo "==> Serving at http://localhost:8080"
  python3 -m http.server 8080 &
  SERVER_PID=$!
elif command -v python &>/dev/null; then
  echo "==> Serving at http://localhost:8080"
  python -m SimpleHTTPServer 8080 &
  SERVER_PID=$!
else
  echo "==> Serving via npx serve at http://localhost:3000"
  npx serve . &
  SERVER_PID=$!
fi

sleep 1

# Open in browser (cross-platform)
if command -v xdg-open &>/dev/null; then
  xdg-open http://localhost:8080
elif command -v open &>/dev/null; then
  open http://localhost:8080
elif command -v start &>/dev/null; then
  start http://localhost:8080
fi

echo "==> Server running (PID $SERVER_PID). Press Ctrl+C to stop."
wait $SERVER_PID
