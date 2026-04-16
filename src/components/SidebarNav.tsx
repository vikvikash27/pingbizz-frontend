"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Users, MessageSquare, BookOpen, Settings, BarChart3, LogOut } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  // { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
  { name: 'Conversations', href: '/dashboard/conversations', icon: MessageSquare },
  { name: 'Leads', href: '/dashboard/leads', icon: Users },
  { name: 'Knowledge Base', href: '/dashboard/kb', icon: BookOpen },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
]

export function SidebarNav() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-slate-50/50 border-r border-slate-200 flex flex-col h-screen fixed left-0 top-0 z-10">
      <div className="h-16 flex items-center px-6 border-b border-slate-200 bg-white">
        <div className="flex items-center gap-2 text-blue-600">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                O
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">OmniFlow</span>
        </div>
      </div>
      
      <div className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = item.href === '/dashboard' 
            ? pathname === '/dashboard' 
            : pathname?.startsWith(item.href)
            
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                isActive 
                  ? "bg-blue-50 text-blue-700" 
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              )}
            >
              <item.icon size={18} />
              {item.name}
            </Link>
          )
        })}
      </div>

      <div className="p-4 border-t border-slate-200 bg-white">
         <div className="flex items-center gap-3 mb-4 px-2">
            <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs">
                JD
            </div>
            <div className="flex-1 overflow-hidden">
                <p className="text-sm font-medium text-slate-900 truncate">John Doe</p>
                <p className="text-xs text-slate-500 truncate">Demo Clinic</p>
            </div>
         </div>
         <button className="flex items-center gap-2 w-full px-2 py-1.5 text-sm text-slate-500 hover:text-red-600 transition-colors">
            <LogOut size={16} />
            Sign Out
         </button>
      </div>
    </aside>
  )
}
