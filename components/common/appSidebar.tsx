'use client';

import * as React from 'react';
import {
  IconChartBar,
  IconCirclePlusFilled,
  IconDashboard,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconMail,
  IconSearch,
  IconSettings,
  IconUsers
} from '@tabler/icons-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupContent
} from '@/components/ui/sidebar';
import { Button } from '../ui/button';
import { NavUser } from './navUser';

const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg'
  },
  navMain: [
    {
      title: 'Dashboard',
      url: '#',
      icon: IconDashboard
    },
    {
      title: 'Lifecycle',
      url: '#',
      icon: IconListDetails
    },
    {
      title: 'Analytics',
      url: '#',
      icon: IconChartBar
    },
    {
      title: 'Projects',
      url: '#',
      icon: IconFolder
    },
    {
      title: 'Team',
      url: '#',
      icon: IconUsers
    }
  ],
  navSecondary: [
    {
      title: 'Settings',
      url: '#',
      icon: IconSettings
    },
    {
      title: 'Get Help',
      url: '#',
      icon: IconHelp
    },
    {
      title: 'Search',
      url: '#',
      icon: IconSearch
    }
  ]
};

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
        <SidebarGroup>
          <SidebarGroupContent className="flex flex-col gap-2">
            <SidebarMenu>
              <SidebarMenuItem className="flex items-center gap-2">
                <NavUser user={data.user} />
              </SidebarMenuItem>
            </SidebarMenu>
            <SidebarMenu>
              {data.navMain.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton tooltip={item.title}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <a href="#">
              <IconSettings />
              <span>Configuración</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarFooter>
    </Sidebar>
  );
}
