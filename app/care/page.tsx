import type { Metadata } from "next";

import { AuthShell } from "@/components/AuthShell";
import { SignOutButton } from "@/components/SignOutButton";
import { care } from "@/content/copy";

export const metadata: Metadata = {
  title: "Caregiver — Nura",
};

// A placeholder so the sign-in flow has somewhere to land. There is no route
// protection because there is no session to protect.
export default function CarePage() {
  return (
    <AuthShell>
      <h1 className="t-display-l text-ink">{care.heading}</h1>
      <p className="t-body mt-3 text-ink-2">{care.body}</p>
      <div className="mt-8">
        <SignOutButton />
      </div>
    </AuthShell>
  );
}
