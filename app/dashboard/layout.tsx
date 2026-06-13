"use client";

import { AppSidebar } from "@/components/app-sidebar";
import ThemeToggler from "@/components/ThemeToggler";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <>loading....</>;
  }

  if (!session) {
    return null;
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 border-b-2">
          <div className="flex items-center gap-2 px-4 justify-between w-full">
            <SidebarTrigger className="-ml-1" />
            <ThemeToggler />
          </div>
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
