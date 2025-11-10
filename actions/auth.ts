'use server';

import { LoginFormSchema } from '@/lib/definitions';
import { LoginFormState } from '@/lib/types';
import * as z from 'zod';
import { redirect } from 'next/navigation';
import { createSession, deleteSession, getSession } from '@/lib/session';
import { getUserById, validateCredentialsToLogin } from './user';

export const login = async (state: LoginFormState, formData: FormData) => {
  const validatedFields = LoginFormSchema.safeParse({
    username: formData.get('username'),
    password: formData.get('password')
  });

  if (!validatedFields.success) {
    const { properties } = z.treeifyError(validatedFields.error);
    return {
      errors: {
        username: properties?.username?.errors,
        password: properties?.password?.errors
      }
    };
  }

  const user = await validateCredentialsToLogin(
    validatedFields.data.username,
    validatedFields.data.password
  );

  if (user) {
    await createSession(user?.id.toString(), user?.rol as string);

    redirect(`/${user.username}`);
  } else {
    return {
      message: 'Usuario o contraseña incorrectos.'
    };
  }
};

export const verifyAuth = async () => {
  const payload = await getSession();

  const user = await getUserById(payload?.userId as string);

  return user || null;
};

export const logout = async () => {
  await deleteSession();
  redirect('/auth/login');
};
