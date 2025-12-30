'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText
} from '@/components/ui/input-group';
import { IconEye, IconEyeClosed } from '@tabler/icons-react';
import { useState } from 'react';

export const CreateUserDialog = () => {
  const [isHidden, setIsHiden] = useState(true);

  const handlePasswordVisibility = () => {
    setIsHiden(!isHidden);
  };

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button>Nuevo usuario</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-160">
          <DialogHeader>
            <DialogTitle>Registrar nuevo usuario</DialogTitle>
            <DialogDescription>
              Complete todos los campos para registrar un nuevo usuario.
            </DialogDescription>
          </DialogHeader>
          {/* ===== Cédula y Rol ===== */}
          <Field className="grid grid-cols-2 gap-4">
            <Field>
              <FieldLabel htmlFor="identityCard">Cédula</FieldLabel>
              <Input id="identityCard" type="text" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="rol">Rol</FieldLabel>
              <Input id="rol" type="text" required />
            </Field>
          </Field>
          {/* ===== Nombres y Apellidos ===== */}
          <Field className="grid grid-cols-2 gap-4">
            <Field>
              <FieldLabel htmlFor="firstname">Nombres</FieldLabel>
              <Input id="firstname" type="text" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="lastname">Apellidos</FieldLabel>
              <Input id="lastname" type="text" required />
            </Field>
          </Field>
          {/* ===== Correo y Celular ===== */}
          <Field className="grid grid-cols-2 gap-4">
            <Field>
              <FieldLabel htmlFor="email">Correo electrónico</FieldLabel>
              <Input id="email" type="email" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="phoneNumber">Celular</FieldLabel>
              <Input id="phoneNumber" type="text" required />
            </Field>
          </Field>
          {/* ===== Usuario y Contraseña ===== */}
          <Field className="grid grid-cols-2 gap-4">
            <Field>
              <FieldLabel htmlFor="username">Usuario</FieldLabel>
              <Input id="username" type="text" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Contraseña</FieldLabel>
              <InputGroup>
                <InputGroupInput
                  id="password"
                  type={isHidden ? 'password' : 'text'}
                />
                <InputGroupAddon align="inline-end">
                  <InputGroupButton
                    variant="ghost"
                    size="icon-xs"
                    onClick={handlePasswordVisibility}
                  >
                    {isHidden ? <IconEye /> : <IconEyeClosed />}
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
            </Field>
          </Field>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DialogClose>
            <Button type="submit">Guardar</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};
