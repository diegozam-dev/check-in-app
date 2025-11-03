import { AppSidebar } from '../../components/layout/sidebar/app-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import SiteHeader from '../../components/layout/header/site-header';
import { users, courses, attendances, enrollments } from '@/mock/data';
import MetricCard from '@/components/layout/cards/metric-card';
import { tableColumns } from '../../features/admin/lib/dashboard/table-columns';
import DataTable from '../../components/layout/table/data-table';

const currentAttendances = attendances.map(attendance => {
  const date = attendance.attendance_date.toLocaleDateString();
  const course = courses.find(course => course.id === attendance.course_id);
  let totalStudents = 0;
  enrollments.forEach(enrolment => {
    if (enrolment.course_id === course?.id) totalStudents += 1;
  });

  return {
    date,
    courseName: course?.name,
    totalStudents: totalStudents
  };
});

const newAttendance = [
  { date: '9/10/2025', courseName: 'Álgebra Lineal', totalStudents: 3 },
  { date: '9/12/2025', courseName: 'Álgebra Lineal', totalStudents: 3 },
  {
    date: '9/11/2025',
    courseName: 'Historia Universal I',
    totalStudents: 2
  },
  { date: '9/10/2025', courseName: 'Álgebra Lineal', totalStudents: 3 },
  { date: '9/12/2025', courseName: 'Álgebra Lineal', totalStudents: 3 },
  {
    date: '9/11/2025',
    courseName: 'Historia Universal I',
    totalStudents: 2
  },
  { date: '9/10/2025', courseName: 'Álgebra Lineal', totalStudents: 3 },
  { date: '9/12/2025', courseName: 'Álgebra Lineal', totalStudents: 3 },
  {
    date: '9/11/2025',
    courseName: 'Historia Universal I',
    totalStudents: 2
  },
  { date: '9/10/2025', courseName: 'Álgebra Lineal', totalStudents: 3 },
  { date: '9/12/2025', courseName: 'Álgebra Lineal', totalStudents: 3 },
  {
    date: '9/11/2025',
    courseName: 'Historia Universal I',
    totalStudents: 2
  },
  { date: '9/10/2025', courseName: 'Álgebra Lineal', totalStudents: 3 },
  { date: '9/12/2025', courseName: 'Álgebra Lineal', totalStudents: 3 },
  {
    date: '9/11/2025',
    courseName: 'Historia Universal I',
    totalStudents: 2
  },
  { date: '9/10/2025', courseName: 'Álgebra Lineal', totalStudents: 3 },
  { date: '9/12/2025', courseName: 'Álgebra Lineal', totalStudents: 3 },
  {
    date: '9/11/2025',
    courseName: 'Historia Universal I',
    totalStudents: 2
  },
  { date: '9/10/2025', courseName: 'Álgebra Lineal', totalStudents: 3 },
  { date: '9/12/2025', courseName: 'Álgebra Lineal', totalStudents: 3 },
  {
    date: '9/11/2025',
    courseName: 'Historia Universal I',
    totalStudents: 2
  },
  { date: '9/10/2025', courseName: 'Álgebra Lineal', totalStudents: 3 },
  { date: '9/12/2025', courseName: 'Álgebra Lineal', totalStudents: 3 },
  {
    date: '9/11/2025',
    courseName: 'Historia Universal I',
    totalStudents: 2
  },
  { date: '9/10/2025', courseName: 'Álgebra Lineal', totalStudents: 3 },
  { date: '9/12/2025', courseName: 'Álgebra Lineal', totalStudents: 3 },
  {
    date: '9/11/2025',
    courseName: 'Historia Universal I',
    totalStudents: 2
  },
  { date: '9/10/2025', courseName: 'Álgebra Lineal', totalStudents: 3 },
  { date: '9/12/2025', courseName: 'Álgebra Lineal', totalStudents: 3 },
  {
    date: '9/11/2025',
    courseName: 'Historia Universal I',
    totalStudents: 2
  },
  { date: '9/10/2025', courseName: 'Álgebra Lineal', totalStudents: 3 },
  { date: '9/12/2025', courseName: 'Álgebra Lineal', totalStudents: 3 },
  {
    date: '9/11/2025',
    courseName: 'Historia Universal I',
    totalStudents: 2
  },
  { date: '9/10/2025', courseName: 'Álgebra Lineal', totalStudents: 3 },
  { date: '9/12/2025', courseName: 'Álgebra Lineal', totalStudents: 3 },
  {
    date: '9/11/2025',
    courseName: 'Historia Universal I',
    totalStudents: 2
  },
  { date: '9/10/2025', courseName: 'Álgebra Lineal', totalStudents: 3 },
  { date: '9/12/2025', courseName: 'Álgebra Lineal', totalStudents: 3 },
  {
    date: '9/11/2025',
    courseName: 'Historia Universal I',
    totalStudents: 2
  },
  { date: '9/10/2025', courseName: 'Álgebra Lineal', totalStudents: 3 },
  { date: '9/12/2025', courseName: 'Álgebra Lineal', totalStudents: 3 },
  {
    date: '9/11/2025',
    courseName: 'Historia Universal I',
    totalStudents: 2
  },
  { date: '9/10/2025', courseName: 'Álgebra Lineal', totalStudents: 3 },
  { date: '9/12/2025', courseName: 'Álgebra Lineal', totalStudents: 3 },
  {
    date: '9/11/2025',
    courseName: 'Historia Universal I',
    totalStudents: 2
  }
];

console.log(currentAttendances);

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
          <div>
            <DataTable columns={tableColumns} data={newAttendance} />
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Home;
