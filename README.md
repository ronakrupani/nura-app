# Nura

Nura is a voice companion for people living with dementia. Their family writes
the answers Nura is allowed to give, and Nura shares them exactly as written,
as gently the fortieth time as the first.

This is the app, not the marketing site. It has two sides: the person with
dementia gets a near-empty screen with one large button and never signs in,
and their family member signs in to write the answers and manage settings.

## What is built so far

Only the front of the door.

- The design foundation: colour, spacing and radius tokens in
  `tailwind.config.ts`, the type scale as utility classes in `globals.css`,
  Newsreader for headings and Figtree for everything else.
- Two shared components, `Button` and `Input`, in `components/`.
- `/login`, one page that toggles between signing in and creating an account.
  Validation is client-side and shows one problem at a time. A valid submit
  shows a loading state and navigates to `/care`. Nothing is sent anywhere,
  nothing is stored, and there is no session. The comment
  `TODO: replace with Supabase auth call` marks where the real call goes.
- `/care`, a placeholder with a sign-out button that returns to `/login`.
- `/`, a placeholder for the patient screen.

There is no backend, no authentication, no database and no API route yet.

## Run it

```bash
npm install
npm run dev
```

Then open <http://localhost:3000/login>.

```bash
npm run build   # production build
npm run start   # serve it
```

## Where things are

```
app/
  layout.tsx          fonts and metadata
  globals.css         type scale, focus ring, reduced motion
  page.tsx            /        patient screen placeholder
  login/page.tsx      /login   sign in and sign up
  care/page.tsx       /care    caregiver placeholder
components/
  Button.tsx
  Input.tsx
  AuthShell.tsx       the single centred column both pages share
  LoginForm.tsx
  SignOutButton.tsx
  Wordmark.tsx
content/
  copy.ts             every string on every page
tailwind.config.ts    the whole colour, spacing and radius system
```

---

Nura is not a medical device and does not provide medical advice.
