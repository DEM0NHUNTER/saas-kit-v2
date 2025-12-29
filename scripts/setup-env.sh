#!/bin/bash

# Define colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🚀 Starting Project Setup...${NC}"

# 1. Check for .env file
if [ -f .env ]; then
    echo -e "${GREEN}✅ .env file already exists.${NC}"
else
    echo -e "${YELLOW}⚠️  .env file not found. Creating from .env.example...${NC}"
    if [ -f .env.example ]; then
        cp .env.example .env
        echo -e "${GREEN}✅ .env created successfully.${NC}"
    else
        echo -e "${RED}❌ Error: .env.example not found! Cannot create .env.${NC}"
        exit 1
    fi
fi

# 2. Install Dependencies
echo -e "${YELLOW}📦 Installing dependencies...${NC}"
# Use --silent to keep the terminal clean, remove if you want to see logs
npm install --silent

echo -e "${GREEN}✅ Setup Complete! You can now run 'npm run dev'.${NC}"