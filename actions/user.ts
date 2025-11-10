'use server';

import { roles, users } from '@/mock/data';

export const getUserById = async (userId: string) => {
  const user = users.find(user => user.id === userId);
  const rol = roles.find(rol => rol.id === user?.rol);

  if (!user || !rol) return null;

  return {
    firstname: user?.firstname,
    lastname: user?.lastname,
    rol: rol?.name,
    username: user?.username,
    email: user?.email,
    state: user?.state,
    id: user?.id
  };
};

export const validateCredentialsToLogin = async (
  username: string,
  password: string
) => {
  const user = users.find(
    user => user.username === username && user.password === password
  );
  const rol = roles.find(rol => rol.id === user?.rol);

  if (!user) return null;

  return {
    firstname: user?.firstname,
    lastname: user?.lastname,
    rol: rol?.name,
    username: user?.username,
    email: user?.email,
    state: user?.state,
    id: user?.id
  };
};
