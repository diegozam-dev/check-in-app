import { AppSidebar } from '@/components/common/appSidebar';
import { SiteHeader } from '@/components/common/siteHeader';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { IconTrendingDown, IconTrendingUp } from '@tabler/icons-react';
import { TypographyH2 } from '@/components/common/typography/h2';
import { AttendanceTableByCourse } from '@/components/feature/attendance-table-by-course/attendaceTableByCourse';

export default function Home() {
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
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              {/* ===== CARD CONTAINER ===== */}
              <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2">
                <Card className="@container/card">
                  <CardHeader>
                    <CardDescription>Total de Usuarios</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                      500
                    </CardTitle>
                  </CardHeader>
                </Card>
                <Card className="@container/card">
                  <CardHeader>
                    <CardDescription>Total de Cursos</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                      24
                    </CardTitle>
                  </CardHeader>
                </Card>
              </div>
              <div className="mt-4 px-4 lg:px-6">
                <TypographyH2 text="Historial de Asistencias" />
                <AttendanceTableByCourse />
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
