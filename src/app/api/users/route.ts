// src/app/api/users/route.ts
import { NextResponse } from 'next/server';
import { userService } from '@/modules/users/users.service';
import { handleError } from '@/server/middleware/error';

// GET /api/users
export async function GET() {
  try {
    const users = await userService.getAllUsers();

    return NextResponse.json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    return handleError(error);
  }
}