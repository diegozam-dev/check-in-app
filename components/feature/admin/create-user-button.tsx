'use client';

import { Button } from '@/components/ui/button';

export const CreateUserButton = () => {
  return (
    <Button onClick={() => alert('Creando nuevo usuario...')}>
      Nuevo usuario
    </Button>
  );
};
