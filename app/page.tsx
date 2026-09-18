import { LinkButton } from "@/components/Button";
import { home } from "@/content/copy";

// The patient screen. Built later; for now, one line and a way through to
// the caregiver side.
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 px-6">
      <h1 className="t-display-l text-ink">Nura.</h1>
      <LinkButton href="/login" variant="secondary">
        {home.signIn}
      </LinkButton>
    </main>
  );
}
