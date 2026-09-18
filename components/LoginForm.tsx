"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { login } from "@/content/copy";

type Mode = "signIn" | "signUp";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

/** Long enough to see the loading state; there is no server behind it yet. */
const PRETEND_REQUEST_MS = 800;

function validate(mode: Mode, email: string, password: string): string | null {
  const trimmedEmail = email.trim();
  if (!trimmedEmail) return login.errors.emailEmpty;
  if (!EMAIL_RE.test(trimmedEmail)) return login.errors.emailInvalid;
  if (!password) return login.errors.passwordEmpty;
  if (mode === "signUp" && password.length < MIN_PASSWORD_LENGTH) {
    return login.errors.passwordShort;
  }
  return null;
}

export function LoginForm() {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>("signIn");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const copy = login[mode];
  const headingId = "login-heading";

  // Do not navigate after unmount if the page is left mid-submit.
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  function switchMode() {
    setMode((current) => (current === "signIn" ? "signUp" : "signIn"));
    setError(null);
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    const problem = validate(mode, email, password);
    if (problem) {
      setError(problem);
      return;
    }

    setError(null);
    setSubmitting(true);

    // TODO: replace with Supabase auth call
    timer.current = setTimeout(() => {
      router.push("/care");
    }, PRETEND_REQUEST_MS);
  }

  return (
    <section aria-labelledby={headingId}>
      <h1 id={headingId} className="t-display-l text-ink">
        {copy.heading}
      </h1>
      <p className="t-body mt-3 text-ink-2">{copy.subhead}</p>

      {/* Always present so a screen reader is listening when an error lands.
          The error is a calm panel in clay: it is not the reader's fault. */}
      <div aria-live="polite" className="mt-8">
        {error ? (
          <p className="t-body-s rounded-lg bg-clay-100 px-4 py-3 text-clay">
            {error}
          </p>
        ) : null}
      </div>

      <form onSubmit={submit} noValidate className="mt-4">
        <Input
          label={login.fields.email}
          type="email"
          name="email"
          autoComplete="email"
          inputMode="email"
          spellCheck={false}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          disabled={submitting}
        />
        <Input
          className="mt-6"
          label={login.fields.password}
          type="password"
          name="password"
          autoComplete={mode === "signIn" ? "current-password" : "new-password"}
          hint={mode === "signUp" ? login.fields.passwordHint : undefined}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          disabled={submitting}
        />
        <Button type="submit" loading={submitting} className="mt-8 w-full">
          {copy.button}
        </Button>
      </form>

      <p className="t-body-s mt-8 text-ink-2">
        {copy.switchPrompt}{" "}
        <button
          type="button"
          onClick={switchMode}
          disabled={submitting}
          className="inline-flex min-h-11 items-center font-medium text-green underline decoration-line-strong underline-offset-4 transition-colors duration-150 ease-nura hover:decoration-green disabled:cursor-not-allowed disabled:opacity-60"
        >
          {copy.switchLink}
        </button>
      </p>
    </section>
  );
}
