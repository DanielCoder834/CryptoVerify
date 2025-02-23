"use client"

import { LineChart, Users, ShieldAlert } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export function Sidebar() {
  const pathname = usePathname()

  const navigation = [
    { name: "Admin", href: "/", icon: Users },
    { name: "Risk Analysis", href: "/risk", icon: LineChart },
    { name: "Support", href: "/support", icon: ShieldAlert },
  ]

  return (
    <div className="flex h-full w-[240px] flex-col border-r bg-white">
      <div className="p-4">
        <h1 className="text-xl font-semibold">
          <span className="text-[#939ef3]">Good</span>Bank
        </h1>
      </div>
      <nav className="flex-1 space-y-1 px-2 py-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                isActive ? "bg-[#f1f2f6] text-[#363844]" : "text-[#616371] hover:bg-[#f1f2f6]",
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

