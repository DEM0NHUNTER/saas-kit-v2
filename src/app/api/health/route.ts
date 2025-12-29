// src/app/api/health/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/shared/lib/prisma';
import { logger } from '@/shared/lib/logger';

export async function GET() {
  try {
    // Perform a lightweight query to check DB connectivity
    await prisma.$queryRaw`SELECT 1`;

    return NextResponse.json(
      {
        status: 'UP',
        timestamp: new Date().toISOString(),
        database: 'connected',
      },
      { status: 200 }
    );
  } catch (error) {
    logger.error('Health Check Failed', { error });
    return NextResponse.json(
      {
        status: 'DOWN',
        timestamp: new Date().toISOString(),
        database: 'disconnected',
      },
      { status: 503 }
    );
  }
}