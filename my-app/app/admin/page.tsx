"use client"

import type React from "react"

import { useState } from "react"
import { DollarSign, Headphones, LayoutDashboard, LogOut, PieChart, Settings, User } from "lucide-react"

import { cn } from "@/lib/utils"
import { AdminView } from "@/components/admin-view"
import { RiskAnalysisView } from "@/components/risk-analysis-view"
import { SupportView } from "@/components/support-view"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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

