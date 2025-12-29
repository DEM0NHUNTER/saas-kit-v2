// src/modules/users/users.service.ts
import { prisma } from '@/shared/lib/prisma';

export const userService = {
  /**
   * Fetch all users.
   * STRICTLY selects only safe fields to avoid leaking passwords.
   */
  async getAllUsers() {
    return await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  },

  /**
   * Find a user by ID.
   */
  async getUserById(id: string) {
    return await prisma.user.findUnique({
      where: { id },
      select: { id: true, email: true, name: true, role: true },
    });
  }
};