"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import { SignOutIcon } from "@phosphor-icons/react";
import { Button } from "./ui/button";

export function NavUser({
  user,
}: {
  user: {
    name: string | null;
    email: string | null;
    avatar: string;
  };
}) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground flex gap-2 items-center p-4">
          <Avatar className="h-8 w-8 rounded-lg">
            <AvatarImage src={user.avatar} alt={user.name || "avatar"} />
            <AvatarFallback className="rounded-lg">
              {user.name?.[0] || "A"}
            </AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">{user.name}</span>
            <span className="truncate text-xs">{user.email}</span>
          </div>
          <Button variant="ghost" size={"icon-lg"}>
            <SignOutIcon size={32} weight="duotone" />
          </Button>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
