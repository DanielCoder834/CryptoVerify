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

import { AreaChart } from "@/components/areachart";


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
              <AreaChartHero />
            </div>
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

const chartdata = [
  { date: "Jan 23", SolarPanels: 2890, Inverters: 2338 },
  { date: "Feb 23", SolarPanels: 2756, Inverters: 2103 },
  { date: "Mar 23", SolarPanels: 3322, Inverters: 2194 },
  { date: "Apr 23", SolarPanels: 3470, Inverters: 2108 },
  { date: "May 23", SolarPanels: 3475, Inverters: 1812 },
  { date: "Jun 23", SolarPanels: 3129, Inverters: 1726 },
  { date: "Jul 23", SolarPanels: 3490, Inverters: 1982 },
  { date: "Aug 23", SolarPanels: 2903, Inverters: 2012 },
  { date: "Sep 23", SolarPanels: 2643, Inverters: 2342 },
  { date: "Oct 23", SolarPanels: 2837, Inverters: 2473 },
  { date: "Nov 23", SolarPanels: 2954, Inverters: 3848 },
  { date: "Dec 23", SolarPanels: 3239, Inverters: 3736 },
];
export const AreaChartHero = () => (
  <AreaChart
    className="h-80"
    data={chartdata}
    index="date"
    categories={["SolarPanels", "Inverters"]}
    valueFormatter={(number: number) =>
      `$${Intl.NumberFormat("us").format(number).toString()}`
    }
    onValueChange={(v) => console.log(v)}
  />
);
