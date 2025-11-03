import SiteHeader from '@/components/layout/header/site-header';
import { AppSidebar } from '@/components/layout/sidebar/app-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

const AppLayout = async ({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ username: string }>;
}) => {
  const { username } = await params;

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
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AppLayout;
