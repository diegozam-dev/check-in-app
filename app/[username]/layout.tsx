'use server';
import { verifyAuth } from '@/actions/auth';
import SiteHeader from '@/components/layout/header/site-header';
import { AppSidebar } from '@/components/layout/sidebar/app-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { redirect } from 'next/navigation';

const AppLayout = async ({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ username: string }>;
}) => {
  const { username } = await params;

  const user = await verifyAuth();

  if (user) {
    redirect(`/${user.username}`);
  } else {
    redirect('/auth/login');
  }

  return (
    <SidebarProvider
      style={
        {
          '--sidebar-width': 'calc(var(--spacing) * 72)',
          '--header-height': 'calc(var(--spacing) * 12)'
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader usename={username} />
        <div className="py-6 px-4 lg:px-6">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AppLayout;
