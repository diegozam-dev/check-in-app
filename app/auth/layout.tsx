import { GalleryVerticalEnd } from 'lucide-react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
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
