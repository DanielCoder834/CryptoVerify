"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MainNav } from "@/components/main-nav";
import { UserNav } from "@/components/user-nav";
import { OverviewTab } from "@/components/overview-tab";
import { LoanTab } from "@/components/loan-tab";
import { CryptoTab } from "@/components/crypto-tab";
import { SupportTab } from "@/components/support-tab";

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        {/* Sidebar */}
        <MainNav activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-semibold text-[#1a1a1a]">
                $180,000.00
              </h1>
              <p className="text-[#8e8e99]">Balance due</p>
            </div>
            <UserNav />
          </div>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <OverviewTab />
            </TabsContent>
            <TabsContent value="details">
              <Tabs defaultValue="loans" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="loans">Loans</TabsTrigger>
                  <TabsTrigger value="crypto">Crypto List</TabsTrigger>
                  <TabsTrigger value="support">Support</TabsTrigger>
                </TabsList>
                <TabsContent value="loans">
                  <LoanTab />
                </TabsContent>
                <TabsContent value="crypto">
                  <CryptoTab />
                </TabsContent>
                <TabsContent value="support">
                  <SupportTab />
                </TabsContent>
              </Tabs>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
