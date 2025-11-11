'use client';

import { ColumnDef } from '@tanstack/react-table';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Attendance = {
  date: string;
  course: string | undefined;
  students: number;
};

export const tableColumns: ColumnDef<Attendance>[] = [
  {
    accessorKey: 'date',
    header: 'Fecha'
  },
  {
    accessorKey: 'course',
    header: 'Curso'
  },
  {
    accessorKey: 'students',
    header: 'Total de estudiantes'
  }
];
