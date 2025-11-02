'use client';

import * as React from 'react';
import {
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconSettings,
  IconHome2,
  IconFile,
  Icon,
  IconUser,
  IconCategory
} from '@tabler/icons-react';

import { NavMain } from './nav-main';
import {
  Sidebar,
  SidebarContent,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';

type SidebarMainData = {
  title: string;
  url: string;
  icon: Icon;
  owner: 'all' | 'admin' | 'teacher' | 'student';
}[];

type SidebarSecondaryData = {
  title: string;
  icon: Icon;
}[];

const navMain: SidebarMainData = [
  {
    title: 'Inicio',
    url: '#',
    icon: IconHome2,
    owner: 'all'
  },
  {
    title: 'Usuarios',
    url: '#',
    icon: IconUser,
    owner: 'admin'
  },

  {
    title: 'Cursos',
    url: '#',
    icon: IconListDetails,
    owner: 'teacher'
  },
  {
    title: 'Categorías',
    url: '#',
    icon: IconCategory,
    owner: 'admin'
  },
  {
    title: 'Reportes',
    url: '#',
    icon: IconFile,
    owner: 'teacher'
  }
];

const navSecondary: SidebarSecondaryData = [
  {
    title: 'Settings',
    icon: IconSettings
  },
  {
    title: 'Get Help',
    icon: IconHelp
  }
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <a href="#">
                <IconInnerShadowTop className="size-5!" />
                <span className="text-base font-semibold">Acme Inc.</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
        <SidebarGroupContent className="mt-auto">
          <SidebarMenu>
            {navSecondary.map(item => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Button>
                    <item.icon />
                    <span>{item.title}</span>
                  </Button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarContent>
    </Sidebar>
  );
}
