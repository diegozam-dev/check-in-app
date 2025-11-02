import { AppSidebar } from '../../components/my/sidebar/app-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import SiteHeader from '../../components/my/site-header';
import { users, courses } from '@/mock/data';
import MetricCard from '@/components/my/cards/metric-card';

const metrics = [
  {
    description: 'Usuarios',
    total: users.length
  },
  {
    description: 'Cursos',
    total: courses.length
  }
];

const Home = async ({ params }: { params: Promise<{ username: string }> }) => {
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
        <main className="p-6">
          <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:shadow-xs lg:px-6 sm:grid-cols-2">
            {metrics.map((metric, index) => (
              <MetricCard
                key={index}
                desciption={metric.description as string}
                total={metric.total}
              />
            ))}
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Home;
