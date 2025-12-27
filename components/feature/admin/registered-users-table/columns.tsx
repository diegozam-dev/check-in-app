import { type ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
import { IconDotsVertical } from '@tabler/icons-react';
import { Button } from '@/components/ui/button';

export type User = {
  id: string;
  identityCard: string;
  fullname: string;
  rol: string;
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'identityCard',
    header: 'Cédula',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('identityCard')}</div>
    )
  },
  {
    accessorKey: 'fullname',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Nombre
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue('fullname')}</div>
    )
  },
  {
    accessorKey: 'rol',
    header: 'Rol',
    cell: ({ row }) => <div className="capitalize">{row.getValue('rol')}</div>
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const user = row.original;

      return (
        <Button onClick={() => alert(`Viendo al usuario: ${user.fullname}`)}>
          <IconDotsVertical />
        </Button>
      );
    }
  }
];
