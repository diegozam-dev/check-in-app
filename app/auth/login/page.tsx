'use client';
import { Button } from '@/components/ui/button';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { login } from '@/actions/auth';
import { useActionState } from 'react';

const LoginPage = () => {
  const [state, action, pending] = useActionState(login, undefined);

  if (state?.message) alert(state.message);

  return (
    <>
      <main className="bg-background flex min-h-svh items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <div className="flex flex-col gap-6">
            <form action={action}>
              <FieldGroup>
                <div className="flex flex-col items-center gap-1 text-center mb-3">
                  <h1 className="text-xl font-bold">Bienvenido a Check In.</h1>
                  <span className="text-sm text-gray-500">
                    Inicia sesión para empezar.
                  </span>
                </div>
                {/* Usuario */}
                <Field>
                  <FieldLabel htmlFor="username">Usuario</FieldLabel>
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Ejemplo: 0999999999"
                    required
                  />
                  {state?.errors?.username && (
                    <span className="text-xs text-red-600">
                      {state.errors.username}
                    </span>
                  )}
                </Field>
                {/* Contraseña */}
                <Field>
                  <FieldLabel htmlFor="password">Contraseña</FieldLabel>
                  <Input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Ejemplo: Sekiro99."
                    required
                  />
                  {state?.errors?.password && (
                    <span className="text-xs text-red-500">
                      {state.errors.password[0]}
                    </span>
                  )}
                </Field>
                <Field>
                  <Button type="submit" disabled={pending}>
                    Ingresar
                  </Button>
                </Field>
              </FieldGroup>
            </form>
            <FieldDescription className="px-6 text-center">
              <Link href="#">¿Olvidó su contraseña?</Link>.
            </FieldDescription>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
