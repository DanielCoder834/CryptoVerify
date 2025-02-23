import Link from "next/link";
import { FileText, Home } from "lucide-react";

export function MainNav({ activeTab, onTabChange }: any) {
  return (
    <nav className="w-[240px] border-r border-[#f1f2f6] p-6 space-y-2">
      <div className="mb-8">
        <h2 className="font-semibold text-xl">Horizon</h2>
      </div>
      <Link
        href="#"
        className={`flex items-center gap-3 px-3 py-2 rounded-lg text-[#1a1a1a] hover:bg-[#f1f2f6] ${
          activeTab === "overview" ? "bg-[#f1f2f6]" : ""
        }`}
        onClick={() => onTabChange("overview")}
      >
        <Home className="w-5 h-5" />
        <span>Overview</span>
      </Link>
      <Link
        href="#"
        className={`flex items-center gap-3 px-3 py-2 rounded-lg text-[#1a1a1a] hover:bg-[#f1f2f6] ${
          activeTab === "details" ? "bg-[#f1f2f6]" : ""
        }`}
        onClick={() => onTabChange("details")}
      >
        <FileText className="w-5 h-5" />
        <span>Details</span>
      </Link>
    </nav>
  );
}
