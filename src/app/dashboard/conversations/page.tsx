"use client"
import { useState } from 'react'
import { TopBar } from '@/components/TopBar'
import { mockConversations } from '@/lib/mockData'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Search, Send, Paperclip, MoreVertical, Phone } from 'lucide-react'

export default function ConversationsPage() {
  const [selectedId, setSelectedId] = useState<string | null>(mockConversations[0].id)
  const activeConv = mockConversations.find(c => c.id === selectedId)

  return (
    <>
      <TopBar title="Conversations" />
      <div className="flex h-[calc(100vh-64px)] overflow-hidden bg-white">
        
        {/* Left Sidebar: Conversation List */}
        <div className="w-80 border-r border-slate-200 flex flex-col bg-slate-50/30">
            <div className="p-4 border-b border-slate-200">
                <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                    <Input placeholder="Search chats..." className="pl-9 h-9 bg-white" />
                </div>
            </div>
            
            <div className="flex-1 overflow-y-auto">
                {mockConversations.map((conv) => (
                    <div 
                        key={conv.id}
                        onClick={() => setSelectedId(conv.id)}
                        className={cn(
                            "p-4 border-b border-slate-100 cursor-pointer hover:bg-slate-100/50 transition-colors",
                            selectedId === conv.id ? "bg-blue-50 hover:bg-blue-50 border-l-4 border-l-blue-600" : "border-l-4 border-l-transparent"
                        )}
                    >
                        <div className="flex justify-between items-start mb-1">
                            <span className={cn("font-semibold text-sm", selectedId === conv.id ? "text-blue-700" : "text-slate-900")}>
                                {conv.contact_name || conv.contact_phone}
                            </span>
                            <span className="text-[10px] text-slate-400">{conv.last_message_at}</span>
                        </div>
                        <p className="text-sm text-slate-500 truncate mb-2">{conv.last_message}</p>
                        <div className="flex gap-2">
                             {conv.status === 'needs_human' && (
                                <Badge variant="destructive" className="h-5 text-[10px] px-1.5">Needs Human</Badge>
                             )}
                             {conv.unread > 0 && (
                                <Badge className="h-5 text-[10px] px-1.5 rounded-full">{conv.unread}</Badge>
                             )}
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Right Pane: Chat Area */}
        {activeConv ? (
            <div className="flex-1 flex flex-col bg-slate-50/50">
                {/* Chat Header */}
                <div className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-6 shadow-sm z-10">
                    <div>
                        <h2 className="text-base font-bold text-slate-900">{activeConv.contact_name}</h2>
                        <p className="text-xs text-slate-500">{activeConv.contact_phone} • {activeConv.status}</p>
                    </div>
                    <div className="flex items-center gap-2">
                         <Button variant="ghost" size="icon" className="text-slate-500">
                            <Phone size={18} />
                         </Button>
                         <Button variant="ghost" size="icon" className="text-slate-500">
                            <MoreVertical size={18} />
                         </Button>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    <div className="text-center">
                        <span className="bg-slate-100 text-slate-500 text-xs px-2 py-1 rounded-full">Today</span>
                    </div>
                    {activeConv.messages.length === 0 ? (
                        <div className="flex items-center justify-center h-full text-slate-400 text-sm">
                            No messages yet. Start the conversation!
                        </div>
                    ) : (
                        activeConv.messages.map((msg) => (
                            <div key={msg.id} className={cn("flex", msg.direction === 'out' ? "justify-end" : "justify-start")}>
                                <div className={cn(
                                    "max-w-[70%] p-3 rounded-2xl text-sm shadow-sm",
                                    msg.direction === 'out' 
                                        ? "bg-blue-600 text-white rounded-br-sm" 
                                        : "bg-white text-slate-800 border border-slate-200 rounded-bl-sm"
                                )}>
                                    <p>{msg.body}</p>
                                    <p className={cn("text-[10px] mt-1 text-right opacity-70", msg.direction === 'out' ? "text-blue-100" : "text-slate-400")}>
                                        {msg.created_at}
                                    </p>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Input Area */}
                <div className="p-4 bg-white border-t border-slate-200">
                    <div className="flex items-end gap-2 bg-slate-50 p-2 rounded-lg border border-slate-200 focus-within:ring-2 focus-within:ring-blue-600/20 focus-within:border-blue-600 transition-all">
                        <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-600 h-9 w-9">
                            <Paperclip size={18} />
                        </Button>
                        <textarea 
                            className="flex-1 bg-transparent border-none resize-none focus:outline-none text-sm max-h-32 py-2"
                            placeholder="Type a message..."
                            rows={1}
                            style={{ minHeight: '36px' }}
                        />
                        <Button className="h-9 w-9 p-0 rounded-lg">
                            <Send size={16} />
                        </Button>
                    </div>
                    <div className="text-center mt-2">
                        <p className="text-[10px] text-slate-400">
                            Press Enter to send. Shift + Enter for new line.
                        </p>
                    </div>
                </div>
            </div>
        ) : (
            <div className="flex-1 flex items-center justify-center bg-slate-50 text-slate-400">
                Select a conversation to start chatting
            </div>
        )}
      </div>
    </>
  )
}
