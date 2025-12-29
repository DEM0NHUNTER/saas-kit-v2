// src/shared/lib/logger.ts
import winston from 'winston';

const { combine, timestamp, json, colorize, printf } = winston.format;

// Custom format for local development (Human readable)
const consoleFormat = printf(({ level, message, timestamp, context }) => {
  return `${timestamp} [${level}] ${context ? `[${context}] ` : ''}${message}`;
});

export const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: combine(timestamp(), json()), // Default to JSON for production
  defaultMeta: { service: 'saas-api' },
  transports: [
    new winston.transports.Console({
      format:
        process.env.NODE_ENV === 'development'
          ? combine(colorize(), timestamp({ format: 'HH:mm:ss' }), consoleFormat)
          : combine(timestamp(), json()),
    }),
  ],
});