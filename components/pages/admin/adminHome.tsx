import { TypographyH2 } from '@/components/common/typography/h2';
import { AttendanceTableByCourse } from '@/components/feature/attendance-table-by-course/attendaceTableByCourse';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

export const AdminHome = () => {
  return (
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
      {/* ===== HISTORIAL DE ASISTENCIA ===== */}
      <div className="mt-4 px-4 lg:px-6">
        <TypographyH2 text="Historial de Asistencias" />
        <AttendanceTableByCourse />
      </div>
    </div>
  );
};
