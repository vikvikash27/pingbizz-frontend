import { Suspense } from "react";
import AcceptInviteClient from "./AcceptInviteClient";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#070A0F] text-white flex items-center justify-center">
          <div className="text-sm text-white/70">Loading invite...</div>
        </div>
      }
    >
      <AcceptInviteClient />
    </Suspense>
  );
}