import { z } from 'zod';

const UserValidationSchema = z.object({
  password: z
    .string()
    .max(20, { message: 'Password can not be more than 20 characters' })
    .optional(),
});

export const UserValidation = {
  UserValidationSchema,
};
