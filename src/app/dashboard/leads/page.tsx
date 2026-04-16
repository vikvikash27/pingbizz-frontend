"use client"
import { useState } from 'react'
import { TopBar } from '@/components/TopBar'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { mockLeads } from '@/lib/mockData'
import { Filter, Download, X, Phone, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function LeadsPage() {
  const [selectedLead, setSelectedLead] = useState<any>(null)
  
  return (
    <>
      <TopBar title="Leads" />
      <main className="p-8 h-[calc(100vh-64px)] overflow-hidden flex flex-col">
        {/* Actions Bar */}
        <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
                <div className="w-64">
                    <Input placeholder="Search leads..." />
                </div>
                <Button variant="outline" className="gap-2 text-slate-600">
                    <Filter size={16} /> Filter
                </Button>
            </div>
            <Button variant="outline" className="gap-2">
                <Download size={16} /> Export
            </Button>
        </div>

        {/* Table */}
        <Card className="flex-1 overflow-hidden flex flex-col shadow-sm border-slate-200">
            <div className="overflow-y-auto flex-1">
                <table className="w-full text-sm text-left">
                    <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200 sticky top-0">
                        <tr>
                            <th className="px-6 py-3">Name</th>
                            <th className="px-6 py-3">Stage</th>
                            <th className="px-6 py-3">Score</th>
                            <th className="px-6 py-3">Contact</th>
                            <th className="px-6 py-3">Captured</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {mockLeads.map((lead) => (
                            <tr 
                                key={lead.id} 
                                onClick={() => setSelectedLead(lead)}
                                className="hover:bg-blue-50/50 cursor-pointer transition-colors"
                            >
                                <td className="px-6 py-4 font-medium text-slate-900">{lead.name}</td>
                                <td className="px-6 py-4">
                                    <Badge variant={
                                        lead.stage === 'won' ? 'success' : 
                                        lead.stage === 'qualified' ? 'default' : 
                                        lead.stage === 'booked' ? 'warning' : 'secondary'
                                    }>
                                        {lead.stage}
                                    </Badge>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                            <div 
                                                className={cn("h-full rounded-full", lead.score > 80 ? "bg-green-500" : "bg-blue-500")} 
                                                style={{ width: `${lead.score}%` }}
                                            />
                                        </div>
                                        <span className="text-xs text-slate-500">{lead.score}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-slate-600">{lead.phone}</td>
                                <td className="px-6 py-4 text-slate-500">{new Date(lead.created_at).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="p-4 border-t border-slate-200 bg-white text-xs text-slate-500 flex justify-between items-center">
                <span>Showing {mockLeads.length} leads</span>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm" disabled>Previous</Button>
                    <Button variant="outline" size="sm" disabled>Next</Button>
                </div>
            </div>
        </Card>

        {/* Right Drawer (Sheet Implementation) */}
        {selectedLead && (
            <div className="fixed inset-0 z-50 flex justify-end bg-black/20 backdrop-blur-sm transition-all" onClick={() => setSelectedLead(null)}>
                <div 
                    className="w-[400px] bg-white h-full shadow-2xl p-6 overflow-y-auto animate-in slide-in-from-right duration-300"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex items-start justify-between mb-8">
                        <div>
                            <h2 className="text-xl font-bold text-slate-900">{selectedLead.name}</h2>
                            <p className="text-slate-500 text-sm">{selectedLead.phone}</p>
                        </div>
                        <Button variant="ghost" size="icon" onClick={() => setSelectedLead(null)}>
                            <X size={20} />
                        </Button>
                    </div>

                    <div className="flex gap-2 mb-8">
                        <Button className="flex-1 gap-2" size="sm">
                            <MessageCircle size={16} /> Chat
                        </Button>
                        <Button variant="outline" className="flex-1 gap-2" size="sm">
                            <Phone size={16} /> Call
                        </Button>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-sm font-semibold text-slate-900 mb-3">Lead Details</h3>
                            <div className="bg-slate-50 rounded-lg p-4 space-y-3 border border-slate-100">
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-500">Stage</span>
                                    <Badge variant="outline">{selectedLead.stage}</Badge>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-500">Quality Score</span>
                                    <span className="font-medium">{selectedLead.score}/100</span>
                                </div>
                                {Object.entries(selectedLead.data).map(([key, val]: any) => (
                                    <div key={key} className="flex justify-between text-sm">
                                        <span className="text-slate-500">{key}</span>
                                        <span className="font-medium text-slate-900">{val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-slate-900 mb-3">Notes</h3>
                            <textarea 
                                className="w-full border border-slate-200 rounded-md p-3 text-sm min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-600"
                                placeholder="Add a note about this lead..."
                            ></textarea>
                            <Button size="sm" className="mt-2 w-full" variant="secondary">Save Note</Button>
                        </div>
                    </div>
                </div>
            </div>
        )}
      </main>
    </>
  )
}
