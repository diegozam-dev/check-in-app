'use server';
import { verifyAuth } from '@/actions/auth';
import MainBreadcrumb from '@/components/layout/breadcrumb/main-breadcrumb';
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

  if (!user || user.username !== username) {
    redirect('/login');
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
        <SiteHeader userId={user.id.toString() as string} />
        <div className="py-6 px-4 lg:px-6">
          <div className="mb-4">
            <MainBreadcrumb />
          </div>
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AppLayout;
