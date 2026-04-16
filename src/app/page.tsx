// import Link from 'next/link'

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center p-24">
//       <h1 className="text-4xl font-bold mb-4">OmniFlow</h1>
//       <p className="text-xl mb-8">WhatsApp Automation for Small Business</p>
//       <Link
//         href="/dashboard"
//         className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//       >
//         Login to Dashboard
//       </Link>
//       <p className="mt-4 text-sm text-gray-500">
//         (Demo Mode: Auto-logs into Demo Tenant)
//       </p>
//     </main>
//   )
// }
import LandingPage from "@/components/landing/LandingPage";

export default function Page() {
  return <LandingPage />;
}
