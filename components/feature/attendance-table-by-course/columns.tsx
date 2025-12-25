import { type ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
import { getFullDate } from '@/lib/getFullDate';
import { IconEye } from '@tabler/icons-react';
import { Button } from '@/components/ui/button';

export type Course = {
  id: string;
  name: string;
  assisted: number;
  absent: number;
  date: Date;
};

export const columns: ColumnDef<Course>[] = [
  {
    accessorKey: 'date',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Fecha
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{getFullDate(row.getValue('date'))}</div>
    )
  },
  {
    accessorKey: 'name',
    header: 'Nombre',
    cell: ({ row }) => <div className="capitalize">{row.getValue('name')}</div>
  },
  {
    accessorKey: 'assisted',
    header: 'Asistidos',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('assisted')}</div>
    )
  },
  {
    accessorKey: 'absent',
    header: 'Ausentes',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('absent')}</div>
    )
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const attendance = row.original;

      return (
        <Button
          onClick={() =>
            alert(`Viendo el historial del curso ${attendance.name}`)
          }
        >
          <IconEye />
        </Button>
      );
    }
  }
];
