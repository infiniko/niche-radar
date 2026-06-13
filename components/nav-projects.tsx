"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  DotsThreeOutlineIcon,
  FolderIcon,
  Icon,
  ShareFatIcon,
  TargetIcon,
  TrashIcon,
} from "@phosphor-icons/react";
import Link from "next/link";

export function NavigationItem({
  navigationItems,
}: {
  navigationItems: {
    id: number;
    name: string;
    url: string;
    icon: Icon;
  }[];
}) {
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <div className="text-2xl text-center flex justify-center items-center gap-2 font-semibold pb-5">
        <TargetIcon size={32} weight="duotone" />
        <span>Niche Radar</span>
      </div>
      <SidebarMenu>
        {navigationItems.map(({ icon: Icon, name, url, id }) => (
          <SidebarMenuItem key={id}>
            <SidebarMenuButton>
              <Icon />
              <Link href={url}>
                <span>{name}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
