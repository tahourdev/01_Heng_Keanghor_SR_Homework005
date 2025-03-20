'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import Image from 'next/image';
import { sidebarItems } from '@/constant';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Settings } from 'lucide-react';

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup className="flex flex-col justify-around">
          <SidebarGroupContent className=" space-y-10">
            <div className="grid place-items-center gap-3">
              <div className=" size-40 mt-10 overflow-hidden rounded-full bg-white drop-shadow-md">
                <img
                  src="https://nextjs-homework005.vercel.app/_next/image?url=https%3A%2F%2Fi.pinimg.com%2F736x%2F44%2F75%2Fbd%2F4475bde75fb129f2f65f00a494e2446b.jpg&w=384&q=75"
                  alt=""
                />
              </div>
              <h3 className="text-lg text-forground">Heng Keanghor</h3>
              <p className="text-primary font-semibold">enghourh5@gmail.com</p>
            </div>
            <SidebarMenu>
              {sidebarItems.map((item) => {
                const isActive = pathname === item.url;

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton isActive={isActive} asChild>
                      <Link href={item.url}>
                        <Image src={item.icon} alt="sidebar icon" width={18} height={18} />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
            <div className="pl-2 w-full p-2 bg-muted rounded-md flex gap-2">
              <Settings size={20} />
              Settings
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
