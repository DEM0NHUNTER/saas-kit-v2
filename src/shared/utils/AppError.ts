// src/shared/utils/AppError.ts

export class AppError extends Error {
  public readonly statusCode: number;
  public readonly isOperational: boolean;

  constructor(message: string, statusCode: number, isOperational = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;

    // Captures the stack trace but keeps the constructor clean
    Error.captureStackTrace(this, this.constructor);
  }
}