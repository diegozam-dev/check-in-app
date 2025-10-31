import { AppSidebar } from './components/sidebar/app-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { users } from '@/mock/data';
import { SiteHeader } from './components/site-header';

const teacher = users[1];

const TeacherHome = () => {
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
        <SiteHeader />
        <div className="flex flex-1 flex-col"></div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default TeacherHome;
