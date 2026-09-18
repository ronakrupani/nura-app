import Link from "next/link";

import { wordmark } from "@/content/copy";

export function Wordmark() {
  return (
    <Link
      href="/"
      className="t-title -ml-2 inline-flex h-11 items-center rounded-md px-2 font-display font-normal text-ink"
    >
      {wordmark}
    </Link>
  );
}
