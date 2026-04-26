#!/bin/bash
# Usage: ./deploy.sh "your commit message"
# If no message provided, defaults to a timestamp-based message.

set -e

MESSAGE="${1:-"Update site: $(date '+%Y-%m-%d %H:%M:%S')"}" 

echo "🔨 Building..."
npm run build

echo "📦 Staging changes..."
# Only stage changes in the backlog-web directory or whole repo depending on usage
git add -A ../

echo "💾 Committing: $MESSAGE"
git commit -m "$MESSAGE"

echo "🚀 Pushing to main..."
git push origin main

echo "✅ Done! GitHub Actions will deploy automatically."
echo "   View at: https://abhishekdewan101.github.io/PlayBit/"
