"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/Button";
import { care } from "@/content/copy";

/** No session exists yet, so signing out is only a navigation. */
export function SignOutButton() {
  const router = useRouter();
  return (
    <Button variant="secondary" onClick={() => router.push("/login")}>
      {care.signOut}
    </Button>
  );
}
