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
import { Course, columns } from './columns';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight
} from 'lucide-react';

const data: Course[] = [
  {
    id: '1',
    name: 'Desarrollo Web Full Stack',
    assisted: 28,
    absent: 2,
    date: new Date('2025-05-12T08:00:00')
  },
  {
    id: '2',
    name: 'Base de Datos II',
    assisted: 30,
    absent: 0,
    date: new Date('2025-05-12T10:30:00')
  },
  {
    id: '3',
    name: 'Ingeniería de Software',
    assisted: 22,
    absent: 5,
    date: new Date('2025-05-11T14:00:00')
  },
  {
    id: '4',
    name: 'Matemáticas Discretas',
    assisted: 18,
    absent: 1,
    date: new Date('2025-05-11T09:00:00')
  },
  {
    id: '5',
    name: 'Redes de Computadoras',
    assisted: 25,
    absent: 3,
    date: new Date('2025-05-10T16:00:00')
  },
  {
    id: '6',
    name: 'Ética Profesional',
    assisted: 35,
    absent: 4,
    date: new Date('2025-05-09T07:00:00')
  },
  {
    id: '7',
    name: 'Algoritmos y Estructura de Datos',
    assisted: 20,
    absent: 2,
    date: new Date('2025-05-08T11:00:00')
  }
];

export const AttendanceTableByCourse = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 5
  });

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
      pagination: pagination
    }
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filtrar cursos..."
          value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
          onChange={event =>
            table.getColumn('name')?.setFilterValue(event.target.value)
          }
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
