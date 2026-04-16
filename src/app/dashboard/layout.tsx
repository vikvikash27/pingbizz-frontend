import { SidebarNav } from '@/components/SidebarNav'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-slate-50/50 flex">
      <SidebarNav />
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        {children}
      </div>
    </div>
  )
}
