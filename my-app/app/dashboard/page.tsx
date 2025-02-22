"use client";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Examples from "@/components/ui/areaChartComponent";

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "19rem",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Building Your Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50">
              <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="tracking-tight text-sm font-medium">
                  BitCoin Price
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <div className="p-6 pt-0 h-[90%]">
                <div className="text-2xl font-bold">$100,231.89</div>
                <p className="text-xs text-muted-foreground justify-end flex flex-col h-[80%]">
                  +20.1% from last month
                </p>
              </div>
            </div>
            <div className="aspect-video rounded-xl bg-muted/50">
              <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="tracking-tight text-sm font-medium">
                  Total Crypto Score
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <div className="p-6 pt-0 h-[90%]">
                <div className="text-2xl font-bold">660</div>
                <p className="text-xs text-muted-foreground justify-end flex flex-col h-[80%]">
                  +2% from last month
                </p>
              </div>
            </div>
            <div className="aspect-video rounded-xl bg-muted/50">
              <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="tracking-tight text-sm font-medium">
                  Total Interest Per Month
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <div className="p-6 pt-0 h-[90%]">
                <div className="text-2xl font-bold">$43,113</div>
                <p className="text-xs text-muted-foreground justify-end flex flex-col h-[80%]">
                  -10.7% from last month
                </p>
              </div>
            </div>
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
            <Examples />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
