'use client';

import * as React from 'react';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnFiltersState,
  type SortingState
} from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { User, columns } from './columns';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight
} from 'lucide-react';

const data: User[] = [
  {
    id: '1',
    identityCard: '0912345678',
    fullname: 'Juan Carlos Pérez',
    rol: 'Estudiante'
  },
  {
    id: '2',
    identityCard: '0923456789',
    fullname: 'María Elena Rodríguez',
    rol: 'Profesor'
  },
  {
    id: '3',
    identityCard: '0934567890',
    fullname: 'Luis Antonio Gómez',
    rol: 'Estudiante'
  },
  {
    id: '4',
    identityCard: '0945678901',
    fullname: 'Ana Sofía Martínez',
    rol: 'Estudiante'
  },
  {
    id: '5',
    identityCard: '0956789012',
    fullname: 'Roberto Carlos Díaz',
    rol: 'Profesor'
  },
  {
    id: '6',
    identityCard: '0967890123',
    fullname: 'Fernanda Lucia Torres',
    rol: 'Estudiante'
  },
  {
    id: '7',
    identityCard: '0978901234',
    fullname: 'Diego Alejandro Ruiz',
    rol: 'Estudiante'
  },
  {
    id: '8',
    identityCard: '0989012345',
    fullname: 'Patricia Elizabeth Castro',
    rol: 'Profesor'
  },
  {
    id: '9',
    identityCard: '0990123456',
    fullname: 'Gabriel Omar Sánchez',
    rol: 'Estudiante'
  },
  {
    id: '10',
    identityCard: '0901234567',
    fullname: 'Valentina Isabel Morales',
    rol: 'Estudiante'
  }
];

export const RegisteredUsersTable = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = React.useState('');
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10
  });

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      pagination,
      globalFilter
    }
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filtrar usuarios..."
          value={globalFilter ?? ''}
          onChange={event => setGlobalFilter(event.target.value)}
          className="max-w-sm"
        />
      </div>
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map(row => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map(cell => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex items-center space-x-6 lg:space-x-8">
          <div className="flex w-25 items-center justify-center text-sm font-medium">
            Página {table.getState().pagination.pageIndex + 1} de{' '}
            {table.getPageCount()}
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="hidden size-8 lg:flex"
              onClick={() => setPagination({ ...pagination, pageIndex: 0 })}
              disabled={!table.getCanPreviousPage()}
            >
              <span className="sr-only">Primera página</span>
              <ChevronsLeft />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="size-8"
              onClick={() =>
                setPagination({
                  ...pagination,
                  pageIndex: pagination.pageIndex - 1
                })
              }
              disabled={!table.getCanPreviousPage()}
            >
              <span className="sr-only">Anterior página</span>
              <ChevronLeft />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="size-8"
              onClick={() => {
                setPagination({
                  ...pagination,
                  pageIndex: pagination.pageIndex + 1
                });
              }}
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">Siguiente página</span>
              <ChevronRight />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hidden size-8 lg:flex"
              onClick={() =>
                setPagination({
                  ...pagination,
                  pageIndex: table.getPageCount() - 1
                })
              }
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">Última página</span>
              <ChevronsRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
