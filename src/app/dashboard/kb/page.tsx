"use client"
import { TopBar } from '@/components/TopBar'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { mockKB } from '@/lib/mockData'
import { Plus, Search, Edit2, Trash2 } from 'lucide-react'

export default function KBPage() {
  return (
    <>
      <TopBar title="Knowledge Base" />
      <main className="p-8 max-w-5xl mx-auto w-full space-y-6">
        
        <div className="flex items-center justify-between">
            <div className="relative w-96">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                <Input placeholder="Search questions or keywords..." className="pl-9 bg-white" />
            </div>
            <Button className="gap-2">
                <Plus size={16} /> Add New Q&A
            </Button>
        </div>

        <div className="grid gap-4">
            {mockKB.map((item) => (
                <Card key={item.id} className="hover:border-blue-300 transition-colors group">
                    <CardContent className="p-6 flex items-start justify-between gap-6">
                        <div className="space-y-2">
                            <div className="flex flex-wrap gap-2 mb-3">
                                {item.keywords.split(',').map((k, i) => (
                                    <span key={i} className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-medium border border-slate-200">
                                        {k.trim()}
                                    </span>
                                ))}
                            </div>
                            <p className="text-slate-900 text-sm leading-relaxed">{item.answer}</p>
                        </div>
                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-blue-600">
                                <Edit2 size={16} />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-red-600">
                                <Trash2 size={16} />
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
      </main>
    </>
  )
}
