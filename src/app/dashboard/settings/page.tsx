"use client"
import { TopBar } from '@/components/TopBar'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Clock, MessageSquare, Database } from 'lucide-react'

export default function SettingsPage() {
  return (
    <>
      <TopBar title="Settings" />
      <main className="p-8 max-w-4xl mx-auto w-full space-y-8">
        
        {/* Business Profile */}
        <Card>
            <CardHeader>
                <CardTitle>Business Profile</CardTitle>
                <CardDescription>Manage your business details and contact info.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Business Name</label>
                        <Input defaultValue="City Dental Clinic" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Industry</label>
                        <Input defaultValue="Healthcare" disabled />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Owner WhatsApp Number</label>
                    <Input defaultValue="+1 (555) 000-0000" className="bg-slate-50" readOnly />
                    <p className="text-xs text-slate-500">This number receives daily reports and handover alerts.</p>
                </div>
            </CardContent>
            <CardFooter className="bg-slate-50 border-t border-slate-100 flex justify-end">
                <Button>Save Changes</Button>
            </CardFooter>
        </Card>

        {/* Configuration Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-2 text-blue-600 mb-2">
                        <MessageSquare size={20} />
                    </div>
                    <CardTitle className="text-lg">Greeting & Flow</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-500">
                    Customize the welcome message and lead capture questions.
                </CardContent>
                <CardFooter>
                    <Button variant="outline" className="w-full">Edit Flow</Button>
                </CardFooter>
            </Card>
            
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-2 text-blue-600 mb-2">
                        <Clock size={20} />
                    </div>
                    <CardTitle className="text-lg">Business Hours</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-500">
                    Set your operating hours to auto-reply when closed.
                </CardContent>
                <CardFooter>
                    <Button variant="outline" className="w-full">Manage Hours</Button>
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <div className="flex items-center gap-2 text-blue-600 mb-2">
                        <Database size={20} />
                    </div>
                    <CardTitle className="text-lg">Lead Fields</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-500">
                    Define what data points to capture from customers.
                </CardContent>
                <CardFooter>
                    <Button variant="outline" className="w-full">Configure Fields</Button>
                </CardFooter>
            </Card>
        </div>

      </main>
    </>
  )
}
