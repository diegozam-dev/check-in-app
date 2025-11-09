'use server';
import { verifyAuth } from '@/actions/auth';
import { GalleryVerticalEnd } from 'lucide-react';
import { redirect } from 'next/navigation';

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await verifyAuth();

  if (user) {
    redirect(`/${user.username}`);
  }

  return (
    <>
      <header className="flex w-full h-[72px] items-center justify-center border-b border-b-gray-200 absolute top-0">
        <GalleryVerticalEnd className="size-6" />
      </header>
      {children}
    </>
  );
};

export default AuthLayout;
