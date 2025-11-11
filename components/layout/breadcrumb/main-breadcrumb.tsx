'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import { usePathname } from 'next/navigation';
import { BREADCRUMB_TRANSLATIONS } from './breadcrumb-translations';
import { IconHome, IconHome2 } from '@tabler/icons-react';
import { Fragment } from 'react/jsx-runtime';
import Link from 'next/link';
import { SlashIcon } from 'lucide-react';

type BreadcrumbsProps = {
  dynamicRoutes?: { [key: string]: string };
};

const MainBreadcrumb = ({ dynamicRoutes = {} }: BreadcrumbsProps) => {
  const pathname = usePathname();

  if (!pathname || pathname === '/') {
    return null;
  }

  const pathSegments = pathname.split('/').filter(segment => segment);
  console.log(pathSegments);

  return (
    <Breadcrumb>
      <BreadcrumbList className="gap-1! text-[--muted-foreground]">
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join('/')}`;

          const displayText =
            dynamicRoutes[segment] ||
            BREADCRUMB_TRANSLATIONS[segment] ||
            segment;

          const isLast = index === pathSegments.length - 1;

          return (
            <Fragment key={href}>
              <BreadcrumbItem>
                <SlashIcon className="size-4" />
              </BreadcrumbItem>
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{displayText}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={href}>{displayText}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default MainBreadcrumb;
