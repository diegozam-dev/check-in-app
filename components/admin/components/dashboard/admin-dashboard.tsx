import { users, courses } from '@/mock/data';
import { tableColumns } from '../../../layout/admin/lib/table-columns';

import MetricCard from '@/components/layout/cards/metric-card';
import DataTable from '@/components/layout/table/data-table';
import { H2 } from '@/components/layout/typography/headings';

const newAttendance = [
  { date: '9/10/2025', course: 'Álgebra Lineal', students: 3 },
  { date: '9/12/2025', course: 'Álgebra Lineal', students: 3 },
  {
    date: '9/11/2025',
    course: 'Historia Universal I',
    students: 2
  },
  { date: '9/10/2025', course: 'Álgebra Lineal', students: 3 },
  { date: '9/12/2025', course: 'Álgebra Lineal', students: 3 },
  {
    date: '9/11/2025',
    course: 'Historia Universal I',
    students: 2
  },
  { date: '9/10/2025', course: 'Álgebra Lineal', students: 3 },
  { date: '9/12/2025', course: 'Álgebra Lineal', students: 3 },
  {
    date: '9/11/2025',
    course: 'Historia Universal I',
    students: 2
  },
  { date: '9/10/2025', course: 'Álgebra Lineal', students: 3 },
  { date: '9/12/2025', course: 'Álgebra Lineal', students: 3 },
  {
    date: '9/11/2025',
    course: 'Historia Universal I',
    students: 2
  },
  { date: '9/10/2025', course: 'Álgebra Lineal', students: 3 },
  { date: '9/12/2025', course: 'Álgebra Lineal', students: 3 },
  {
    date: '9/11/2025',
    course: 'Historia Universal I',
    students: 2
  },
  { date: '9/10/2025', course: 'Álgebra Lineal', students: 3 },
  { date: '9/12/2025', course: 'Álgebra Lineal', students: 3 },
  {
    date: '9/11/2025',
    course: 'Historia Universal I',
    students: 2
  },
  { date: '9/10/2025', course: 'Álgebra Lineal', students: 3 },
  { date: '9/12/2025', course: 'Álgebra Lineal', students: 3 },
  {
    date: '9/11/2025',
    course: 'Historia Universal I',
    students: 2
  },
  { date: '9/10/2025', course: 'Álgebra Lineal', students: 3 },
  { date: '9/12/2025', course: 'Álgebra Lineal', students: 3 },
  {
    date: '9/11/2025',
    course: 'Historia Universal I',
    students: 2
  },
  { date: '9/10/2025', course: 'Álgebra Lineal', students: 3 },
  { date: '9/12/2025', course: 'Álgebra Lineal', students: 3 },
  {
    date: '9/11/2025',
    course: 'Historia Universal I',
    students: 2
  },
  { date: '9/10/2025', course: 'Álgebra Lineal', students: 3 },
  { date: '9/12/2025', course: 'Álgebra Lineal', students: 3 },
  {
    date: '9/11/2025',
    course: 'Historia Universal I',
    students: 2
  },
  { date: '9/10/2025', course: 'Álgebra Lineal', students: 3 },
  { date: '9/12/2025', course: 'Álgebra Lineal', students: 3 },
  {
    date: '9/11/2025',
    course: 'Historia Universal I',
    students: 2
  },
  { date: '9/10/2025', course: 'Álgebra Lineal', students: 3 },
  { date: '9/12/2025', course: 'Álgebra Lineal', students: 3 },
  {
    date: '9/11/2025',
    course: 'Historia Universal I',
    students: 2
  },
  { date: '9/10/2025', course: 'Álgebra Lineal', students: 3 },
  { date: '9/12/2025', course: 'Álgebra Lineal', students: 3 },
  {
    date: '9/11/2025',
    course: 'Historia Universal I',
    students: 2
  },
  { date: '9/10/2025', course: 'Álgebra Lineal', students: 3 },
  { date: '9/12/2025', course: 'Álgebra Lineal', students: 3 },
  {
    date: '9/11/2025',
    course: 'Historia Universal I',
    students: 2
  },
  { date: '9/10/2025', course: 'Álgebra Lineal', students: 3 },
  { date: '9/12/2025', course: 'Álgebra Lineal', students: 3 },
  {
    date: '9/11/2025',
    course: 'Historia Universal I',
    students: 2
  }
];

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

const AdminDashboard = () => {
  return (
    <div>
      <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:shadow-xs sm:grid-cols-2">
        {metrics.map((metric, index) => (
          <MetricCard
            key={index}
            desciption={metric.description as string}
            total={metric.total}
          />
        ))}
      </div>
      <div className="mt-8">
        <H2 label="Historial de asistencia" />
        <DataTable columns={tableColumns} data={newAttendance} />
      </div>
    </div>
  );
};

export default AdminDashboard;
