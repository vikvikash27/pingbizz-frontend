"use client";
import { TopBar } from "@/components/TopBar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mockStats, mockLeads } from "@/lib/mockData";
import {
  Users,
  MessageSquare,
  Calendar,
  TrendingUp,
  ArrowRight,
  Plus,
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <>
      <TopBar title="Overview" />
      <main className="p-8 space-y-8 max-w-7xl mx-auto w-full">
        {/* KPI Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <KpiCard
            title="Total Leads"
            value={mockStats.total_leads}
            change="+12%"
            icon={Users}
          />
          <KpiCard
            title="New Bookings"
            value={mockStats.new_bookings}
            change="+5%"
            icon={Calendar}
          />
          <KpiCard
            title="Active Chats"
            value={mockStats.active_conversations}
            change="+2"
            icon={MessageSquare}
          />
          <KpiCard
            title="Conversion"
            value={`${mockStats.conversion_rate}%`}
            change="+1.2%"
            icon={TrendingUp}
          />
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Leads Table */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">
                Recent Leads
              </h2>
              <Link href="/dashboard/leads">
                <Button variant="ghost" size="sm" className="gap-1">
                  View All <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
            <Card>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-100">
                    <tr>
                      <th className="px-6 py-3">Name</th>
                      <th className="px-6 py-3">Status</th>
                      <th className="px-6 py-3">Score</th>
                      <th className="px-6 py-3">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {mockLeads.slice(0, 5).map((lead) => (
                      <tr
                        key={lead.id}
                        className="hover:bg-slate-50/50 transition-colors"
                      >
                        <td className="px-6 py-4 font-medium text-slate-900">
                          {lead.name}
                        </td>
                        <td className="px-6 py-4">
                          <Badge variant={getLeadStatusVariant(lead.stage)}>
                            {lead.stage}
                          </Badge>
                        </td>
                        <td className="px-6 py-4 text-slate-600">
                          {lead.score}
                        </td>
                        <td className="px-6 py-4 text-slate-500">
                          {new Date(lead.created_at).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          {/* Quick Actions & Status */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white border-none">
              <CardHeader>
                <CardTitle className="text-white">Quick Broadcast</CardTitle>
                <CardDescription className="text-blue-100">
                  Send a message to all new leads.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="secondary"
                  className="w-full text-blue-700 font-semibold gap-2"
                >
                  <Plus size={16} /> New Campaign
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>System Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-slate-600">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    WhatsApp API
                  </span>
                  <span className="font-medium text-green-600">Connected</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-slate-600">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    Webhook
                  </span>
                  <span className="font-medium text-green-600">Active</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-slate-600">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    Database
                  </span>
                  <span className="font-medium text-green-600">Healthy</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}

function getLeadStatusVariant(
  stage: string,
): "default" | "secondary" | "outline" | "destructive" | "success" | "warning" {
  if (stage === "won") {
    return "success";
  }
  if (stage === "qualified") {
    return "default";
  }
  return "secondary";
}

function KpiCard({ title, value, change, icon: Icon }: any) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-slate-500">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-slate-400" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-slate-900">{value}</div>
        <p className="text-xs text-slate-500 mt-1">
          <span className="text-green-600 font-medium">{change}</span> from last
          month
        </p>
      </CardContent>
    </Card>
  );
}
