import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nura",
  description:
    "Nura is a gentle voice companion for people living with dementia. Their family writes the answers, and Nura shares them exactly as written.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
