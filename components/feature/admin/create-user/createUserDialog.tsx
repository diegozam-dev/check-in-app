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
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput
} from '@/components/ui/input-group';
import {
  IconArrowDown,
  IconChevronDown,
  IconEye,
  IconEyeClosed
} from '@tabler/icons-react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';

const formSchema = z.object({
  identityCard: z
    .string()
    .regex(/^\d+$/, 'Solo se permiten números')
    .length(10, 'Debe tener 10 caracteres')
    .trim(),
  rol: z.string().min(1, 'Debe escojer un rol'),
  firstname: z.string().min(1, 'Falta por completar'),
  lastname: z.string().min(1, 'Falta por completar'),
  email: z.email({ error: 'Ingrese un correo válido' }),
  phoneNumber: z
    .string()
    .regex(/^\d+$/, 'Solo se permiten números')
    .length(10, 'Debe tener 10 caracteres')
    .trim(),
  username: z.string().min(1, 'Falta por completar'),
  password: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/,
      'La contraseña debe tener mínimo 6 caracteres, incluir mayúsculas, minúsculas, números y un carácter especial'
    )
});

export const CreateUserDialog = () => {
  const [isHidden, setIsHiden] = useState(true);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      identityCard: '',
      rol: '',
      firstname: '',
      lastname: '',
      email: '',
      phoneNumber: '',
      username: '',
      password: ''
    }
  });

  const handlePasswordVisibility = () => {
    setIsHiden(!isHidden);
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    form.reset();
  };

  return (
    <Dialog>
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
        <form
          id="createUserForm"
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          {/* ===== Cédula y Rol ===== */}
          <FieldGroup className="grid grid-cols-2 gap-4">
            <Controller
              name="identityCard"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="identityCard">Cédula</FieldLabel>
                  <Input
                    {...field}
                    id="identityCard"
                    aria-invalid={fieldState.invalid}
                    autoComplete="on"
                  />
                  {fieldState.invalid && (
                    <FieldError
                      errors={[fieldState.error]}
                      className="text-xs"
                    />
                  )}
                </Field>
              )}
            />
            <Controller
              name="rol"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="rol">Rol</FieldLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value || ''}
                  >
                    <SelectTrigger className="w-45">
                      <SelectValue placeholder="Seleccione un rol" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Roles</SelectLabel>
                        <SelectItem value="admin">Administrador</SelectItem>
                        <SelectItem value="teacher">Profesor</SelectItem>
                        <SelectItem value="student">Estudiante</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {fieldState.invalid && (
                    <FieldError
                      errors={[fieldState.error]}
                      className="text-xs"
                    />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
          {/* ===== Nombres y Apellidos ===== */}
          <FieldGroup className="grid grid-cols-2 gap-4">
            <Controller
              name="firstname"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="firstname">Nombres</FieldLabel>
                  <Input
                    {...field}
                    id="firstname"
                    aria-invalid={fieldState.invalid}
                    autoComplete="on"
                  />
                  {fieldState.invalid && (
                    <FieldError
                      errors={[fieldState.error]}
                      className="text-xs"
                    />
                  )}
                </Field>
              )}
            />
            <Controller
              name="lastname"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="lastname">Apellidos</FieldLabel>
                  <Input
                    {...field}
                    id="lastname"
                    aria-invalid={fieldState.invalid}
                    autoComplete="on"
                  />
                  {fieldState.invalid && (
                    <FieldError
                      errors={[fieldState.error]}
                      className="text-xs"
                    />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
          {/* ===== Correo y Celular ===== */}
          <FieldGroup className="grid grid-cols-2 gap-4">
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="email">Correo electrónico</FieldLabel>
                  <Input
                    {...field}
                    id="email"
                    aria-invalid={fieldState.invalid}
                    autoComplete="on"
                  />
                  {fieldState.invalid && (
                    <FieldError
                      errors={[fieldState.error]}
                      className="text-xs"
                    />
                  )}
                </Field>
              )}
            />
            <Controller
              name="phoneNumber"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="phoneNumber">
                    Número de celular
                  </FieldLabel>
                  <Input
                    {...field}
                    id="phoneNumber"
                    aria-invalid={fieldState.invalid}
                    autoComplete="on"
                  />
                  {fieldState.invalid && (
                    <FieldError
                      errors={[fieldState.error]}
                      className="text-xs"
                    />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
          {/* ===== Usuario y Contraseña ===== */}
          <FieldGroup className="grid grid-cols-2 gap-4">
            <Controller
              name="username"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="username">Usuario</FieldLabel>
                  <Input
                    {...field}
                    id="username"
                    aria-invalid={fieldState.invalid}
                    autoComplete="on"
                  />
                  {fieldState.invalid && (
                    <FieldError
                      errors={[fieldState.error]}
                      className="text-xs"
                    />
                  )}
                </Field>
              )}
            />
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="password">Contraseña</FieldLabel>
                  <InputGroup>
                    <InputGroupInput
                      {...field}
                      id="password"
                      aria-invalid={fieldState.invalid}
                      autoComplete="on"
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
                  {fieldState.invalid && (
                    <FieldError
                      errors={[fieldState.error]}
                      className="text-xs"
                    />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DialogClose>
          <Button type="submit" form="createUserForm">
            Guardar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
