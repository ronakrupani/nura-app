import type { ReactNode } from "react";

import { Wordmark } from "@/components/Wordmark";
import { disclaimer } from "@/content/copy";

/** One centred column, at most 400px wide, with the wordmark above and the
    disclaimer below. Shared by the sign-in page and the care placeholder. */
export function AuthShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col px-6 py-8">
      <header className="mx-auto w-full max-w-form">
        <Wordmark />
      </header>

      {/* Top-aligned on a phone so an error appearing above the form does not
          move the fields under the reader's thumb; centred once there is room. */}
      <main className="mx-auto flex w-full max-w-form flex-1 flex-col justify-start py-12 md:justify-center">
        {children}
      </main>

      <footer className="mx-auto w-full max-w-form">
        <p className="t-caption text-ink-3">{disclaimer}</p>
      </footer>
    </div>
  );
}
