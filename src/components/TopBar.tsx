"use client";
import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function TopBar({ title }: { readonly title: string }) {
  return (
    <header className="h-16 border-b border-slate-200 bg-white px-8 flex items-center justify-between sticky top-0 z-10">
      <div>
        <h1 className="text-lg font-semibold text-slate-900">{title}</h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative w-64 hidden md:block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
          <Input
            placeholder="Search..."
            className="pl-9 h-9 bg-slate-50 border-slate-200 focus:bg-white transition-all"
          />
        </div>

        <Button variant="ghost" size="icon" className="relative text-slate-500">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </Button>
      </div>
    </header>
  );
}
