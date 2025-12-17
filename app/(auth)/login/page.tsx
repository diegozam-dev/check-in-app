import { GalleryVerticalEnd } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <form>
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <a
                  href="#"
                  className="flex flex-col items-center gap-2 font-medium"
                >
                  <div className="flex size-8 items-center justify-center rounded-md">
                    <GalleryVerticalEnd className="size-6" />
                  </div>
                </a>
                <h1 className="text-xl font-bold">Bienvenido a Check In</h1>
              </div>
              <Field>
                {/* ===== Username ===== */}
                <FieldLabel htmlFor="usuario">Usuario</FieldLabel>
                <Input
                  id="usuario"
                  type="text"
                  placeholder="Ej: 0999999999"
                  required
                />
              </Field>
              {/* ===== Password ===== */}
              <Field>
                <FieldLabel htmlFor="password">Contraseña</FieldLabel>
                <Input
                  id="password"
                  type="password"
                  placeholder="Ej: Holamundo95"
                  required
                />
              </Field>
              <Field>
                <Button type="submit">Ingresar</Button>
              </Field>
            </FieldGroup>
          </form>
          <FieldDescription className="px-6 text-center">
            <Link href="#">Recuperar contraseña</Link>
          </FieldDescription>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
