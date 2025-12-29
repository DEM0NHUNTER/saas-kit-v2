#!/bin/bash

# Stop script on first error
set -e

GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${GREEN}🔍 Starting Build Verification...${NC}"

# 1. Linting
echo "1️⃣  Running Linter..."
npm run lint
echo -e "${GREEN}✅ Lint passed.${NC}"

# 2. Type Checking (The most important step for TypeScript)
echo "2️⃣  Checking Types..."
# --noEmit tells TypeScript to just check for errors, not generate files
npx tsc --noEmit
echo -e "${GREEN}✅ Type check passed.${NC}"

# 3. Testing
echo "3️⃣  Running Unit Tests..."
npm run test
echo -e "${GREEN}✅ Tests passed.${NC}"

echo -e "${GREEN}🎉 VERIFICATION SUCCESSFUL. Code is safe to commit.${NC}"