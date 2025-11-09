'use server';

import { LoginFormSchema } from '@/lib/definitions';
import { LoginFormState } from '@/lib/types';
import * as z from 'zod';
import { users } from '@/mock/data';
import { redirect } from 'next/navigation';
import { createSession, deleteSession, getSession } from '@/lib/session';
import { getUserById } from './user';

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

  const user = loginUser(
    validatedFields.data.username,
    validatedFields.data.password
  );

  const loggedUser = await getUserById(user?.id as number);

  if (loggedUser) {
    await createSession(loggedUser?.id.toString(), loggedUser?.rol);

    redirect(`/${loggedUser.username}`);
  } else {
    return {
      message: 'Usuario o contraseña incorrectos.'
    };
  }
};

// Helper
const loginUser = (username: string, password: string) => {
  const user = users.find(
    user => user.username === username && user.password === password
  );

  return user;
};

export const verifyAuth = async () => {
  const payload = await getSession();

  const user = await getUserById(parseInt(payload?.userId as string));

  return user || null;
};

export const logout = async () => {
  await deleteSession();
  redirect('/auth/login');
};
