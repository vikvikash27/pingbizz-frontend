"use client"
import { useEffect, useState } from 'react'

interface AnalyticsData {
  total_leads: number;
  new_bookings: number;
  total_conversations: number;
  conversion_rate: number;
  messages_sent: number;
  messages_received: number;
}

export default function AnalyticsPage() {
  const [data, setData] = useState<AnalyticsData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // We send 'owner' role to simulate full access in this demo
    fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/analytics`, {
        headers: { 
            'x-org-id': '00000000-0000-0000-0000-000000000001',
            'x-user-role': 'owner' 
        }
    })
    .then(r => r.json())
    .then(setData)
    .finally(() => setLoading(false))
  }, [])

  if (loading) return <div>Loading metrics...</div>
  if (!data) return <div>Failed to load data</div>

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Analytics</h1>
        <div className="flex gap-2">
            <select className="border p-2 rounded bg-white">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option>All Time</option>
            </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-gray-500 text-sm font-medium">Total Leads</h3>
            <div className="flex items-baseline mt-2">
                <span className="text-3xl font-bold">{data.total_leads}</span>
            </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-gray-500 text-sm font-medium">New Bookings</h3>
            <div className="flex items-baseline mt-2">
                <span className="text-3xl font-bold">{data.new_bookings}</span>
            </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-gray-500 text-sm font-medium">Conversations</h3>
            <div className="flex items-baseline mt-2">
                <span className="text-3xl font-bold">{data.total_conversations}</span>
            </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-gray-500 text-sm font-medium">Conversion Rate</h3>
            <div className="flex items-baseline mt-2">
                <span className="text-3xl font-bold text-green-600">{data.conversion_rate}%</span>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold mb-4 text-gray-700">Message Volume</h3>
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <span className="text-gray-600">Sent</span>
                    <span className="font-semibold text-blue-600">{data.messages_sent}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${(data.messages_sent / (data.messages_sent + data.messages_received || 1)) * 100}%`}}></div>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-600">Received</span>
                    <span className="font-semibold text-green-600">{data.messages_received}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: `${(data.messages_received / (data.messages_sent + data.messages_received || 1)) * 100}%`}}></div>
                </div>
            </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold mb-4 text-gray-700">Lead Health</h3>
            <div className="flex items-center justify-center h-48 bg-gray-50 rounded-lg text-gray-400">
                Chart Placeholder
            </div>
        </div>
      </div>
    </div>
  )
}
