"use client"
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

interface Message {
    id: string;
    direction: string;
    body: string;
    created_at: string;
}

interface ConversationDetail {
    id: string;
    contact_phone: string;
    status: string;
    messages: Message[];
}

export default function ConversationDetailPage() {
    const params = useParams()
    const id = params?.id
    
    const [conversation, setConversation] = useState<ConversationDetail | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!id) return;
        
        fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/conversations/${id}`, {
            headers: { 'x-org-id': '00000000-0000-0000-0000-000000000001' }
        })
        .then(r => r.json())
        .then(setConversation)
        .finally(() => setLoading(false))
    }, [id])

    if (loading) return <div>Loading chat...</div>
    if (!conversation) return <div>Conversation not found</div>

    return (
        <div className="h-[calc(100vh-140px)] flex flex-col">
            <div className="mb-4 flex justify-between items-center border-b pb-4">
                <div>
                    <h1 className="text-2xl font-bold">{conversation.contact_phone}</h1>
                    <span className={`text-xs px-2 py-1 rounded ${conversation.status === 'needs_human' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                        {conversation.status}
                    </span>
                </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50 rounded-lg border space-y-4">
                {conversation.messages.length === 0 ? (
                    <p className="text-center text-gray-400">No messages yet.</p>
                ) : conversation.messages.map((msg) => (
                    <div 
                        key={msg.id} 
                        className={`flex ${msg.direction === 'out' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div className={`max-w-[70%] p-3 rounded-lg shadow-sm ${
                            msg.direction === 'out' 
                                ? 'bg-blue-600 text-white rounded-br-none' 
                                : 'bg-white text-gray-800 border rounded-bl-none'
                        }`}>
                            <p className="whitespace-pre-wrap">{msg.body}</p>
                            <p className={`text-[10px] mt-1 ${msg.direction === 'out' ? 'text-blue-100' : 'text-gray-400'}`}>
                                {new Date(msg.created_at).toLocaleString()}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
