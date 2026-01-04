// src/server/middleware/error.ts
import { NextResponse } from 'next/server';
import { logger } from '@/shared/lib/logger';
import { AppError } from '@/shared/utils/AppError';
import { ZodError } from 'zod';

export function handleError(err: unknown) {
  // 1. Handle Zod Validation Errors
  if (err instanceof ZodError) {
    return NextResponse.json(
      {
        success: false,
        message: 'Validation Error',
        errors: err.errors,
      },
      { status: 400 }
    );
  }

  // 2. Handle Trusted Operational Errors (User mistakes)
  if (err instanceof AppError) {
    return NextResponse.json(
      {
        success: false,
        message: err.message,
      },
      { status: err.statusCode }
    );
  }

  // 3. Handle Unknown/Crash Errors (Log them!)
  logger.error('CRITICAL ERROR', { error: err });

  // But we send a generic message to the user for security
  return NextResponse.json(
    {
      success: false,
      message: 'Internal Server Error',
    },
    { status: 500 }
  );
}