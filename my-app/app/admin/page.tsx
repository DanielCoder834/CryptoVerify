<<<<<<< HEAD
"use client"

import type React from "react"

import { useState } from "react"
import { DollarSign, Headphones, LayoutDashboard, LogOut, PieChart, Settings, User } from "lucide-react"

import { cn } from "@/lib/utils"
import { AdminView } from "@/components/admin-view"
import { RiskAnalysisView } from "@/components/risk-analysis-view"
import { SupportView } from "@/components/support-view"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
=======
"use client";
import { AppSidebar, SideBar } from "@/components/app-sidebar";
>>>>>>> refs/remotes/origin/main
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

<<<<<<< HEAD
type TabType = "admin" | "risk" | "support"

export default function BankDashboard() {
  const [activeTab, setActiveTab] = useState<TabType>("admin")

  return (
    <div className="flex h-screen bg-[#f1f2f6]">
      {/* Sidebar */}
      <div className="w-64 border-r bg-white">
        <div className="p-6">
          <h1 className="text-2xl font-semibold">
            <span className="text-[#939ef3]">Crypto</span>
            <span className="text-[#1a1a1a]">LTV</span>
          </h1>
        </div>
        <nav className="px-4 py-2">
          <NavItem
            icon={LayoutDashboard}
            label="Admin"
            active={activeTab === "admin"}
            onClick={() => setActiveTab("admin")}
          />
          <NavItem
            icon={PieChart}
            label="Risk Analysis"
            active={activeTab === "risk"}
            onClick={() => setActiveTab("risk")}
          />
          <NavItem
            icon={Headphones}
            label="Support"
            active={activeTab === "support"}
            onClick={() => setActiveTab("support")}
          />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="h-16 px-8 border-b bg-white flex items-center justify-between">
          <h2 className="font-semibold text-[#1a1a1a]">
            {activeTab === "admin" && "Administration"}
            {activeTab === "risk" && "Risk Analysis"}
            {activeTab === "support" && "Support Dashboard"}
          </h2>
          <UserNav />
        </header>

        <div className="p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <StatCard icon={DollarSign} amount="$160,000,000" label="Assets Under Management" />
            <StatCard
              icon={DollarSign}
              amount="$5,069,231.00"
              label="Total Loans"
              iconClassName="bg-[#939ef3]/10 text-[#939ef3]"
            />
          </div>

          {/* Dynamic View Content */}
          {activeTab === "admin" && <AdminView />}
          {activeTab === "risk" && <RiskAnalysisView />}
          {activeTab === "support" && <SupportView />}
        </div>
      </div>
    </div>
  )
}

function UserNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 hover:opacity-80">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg" alt="User avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="text-sm text-left hidden sm:block">
            <div className="font-medium">John Doe</div>
            <div className="text-xs text-[#616371]">Administrator</div>
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-600">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function NavItem({
  icon: Icon,
  label,
  active,
  onClick,
}: {
  icon: React.ElementType
  label: string
  active?: boolean
  onClick?: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 w-full px-4 py-2 rounded-lg text-[#616371] hover:text-[#363844] hover:bg-[#f1f2f6] transition-colors",
        active && "bg-[#f1f2f6] text-[#363844]",
      )}
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium">{label}</span>
    </button>
  )
}

function StatCard({
  icon: Icon,
  amount,
  label,
  iconClassName,
}: {
  icon: React.ElementType
  amount: string
  label: string
  iconClassName?: string
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-2xl font-semibold text-[#1a1a1a]">{amount}</div>
          <div className="text-sm text-[#9da0b6] mt-1">{label}</div>
        </div>
        <div className={cn("p-3 rounded-lg bg-[#939ef3] text-white", iconClassName)}>
          <Icon className="w-5 h-5" />
        </div>
      </div>
    </div>
  )
}

=======
import Examples from "@/components/ui/areaChartComponent";
import { useEffect, useState } from "react";
import { fetchBitcoinPrice } from "@/lib/fetchBitcoinPrice";
import AdminDashboardPage from "@/components/admin-dashboard";
import LoanDetails from "@/components/loan-details";

const data: SideBar = {
  navMain: [
    {
      title: "Home",
      url: "/",
      items: [
        {
          title: "Dashboard",
          url: "/admin",
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "19rem",
        } as React.CSSProperties
      }
    >
      <AppSidebar data={data} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Finances</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Loans</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <AdminDashboardPage />
        {/* <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
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
        </div> */}
      </SidebarInset>
    </SidebarProvider>
  );
}
>>>>>>> refs/remotes/origin/main
