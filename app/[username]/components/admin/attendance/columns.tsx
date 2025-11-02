'use client';

import { ColumnDef } from '@tanstack/react-table';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Attendance = {
  date: string;
  courseName: string | undefined;
  totalStudents: number;
};

export const columns: ColumnDef<Attendance>[] = [
  {
    accessorKey: 'date',
    header: 'Fecha'
  },
  {
    accessorKey: 'courseName',
    header: 'Curso'
  },
  {
    accessorKey: 'totalStudents',
    header: 'Total de estudiantes'
  }
];
