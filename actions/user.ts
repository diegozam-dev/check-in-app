'use server';

import { roles, users } from '@/mock/data';

export const getUserById = async (userId: number) => {
  const user = users.find(user => user.id === userId);
  const rol = roles.find(rol => rol.id === user?.rol);

  console.log(userId);

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
