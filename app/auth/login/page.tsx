import { Button } from '@/components/ui/button';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { GalleryVerticalEnd } from 'lucide-react';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <>
      <div className="flex w-full h-[72px] items-center justify-center border-b border-b-gray-200 absolute top-0">
        <GalleryVerticalEnd className="size-6" />
      </div>
      <div className="bg-background flex min-h-svh items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <div className="flex flex-col gap-6">
            <form>
              <FieldGroup>
                <div className="flex flex-col items-center gap-1 text-center mb-3">
                  <h1 className="text-xl font-bold">Bienvenido a Check In.</h1>
                  <span className="text-sm text-gray-500">
                    Inicia sesión para empezar.
                  </span>
                </div>
                {/* Usuario */}
                <Field>
                  <FieldLabel htmlFor="email">Usuario</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </Field>
                {/* Contraseña */}
                <Field>
                  <FieldLabel htmlFor="email">Contraseña</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </Field>
                <Field>
                  <Button type="submit">Ingresar</Button>
                </Field>
              </FieldGroup>
            </form>
            <FieldDescription className="px-6 text-center">
              <Link href="#">¿Olvidó su contraseña?</Link>.
            </FieldDescription>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
