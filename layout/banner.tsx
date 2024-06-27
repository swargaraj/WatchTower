import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Banner() {
  return (
    <div className="flex items-center gap-x-6 overflow-hidden px-6 py-4 sm:px-3.5 sm:before:flex-1 text-neutral-200 bg-gray-900">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6">
          <strong className="font-semibold">Banner Title</strong>
          <svg
            viewBox="0 0 2 2"
            className="mx-2 inline h-0.5 w-0.5 fill-current"
            aria-hidden="true"
          >
            <circle cx="1" cy="1" r="1" />
          </svg>
          This is an example of a banner.
        </p>
        <Link href="#" className="text-sm leading-6 underline-offset-4 hover:underline inline-flex items-center">
          Action <ArrowRight className="ml-1 h-4 w-4" strokeWidth={2} />
        </Link>
      </div>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
        >
          <span className="sr-only">Dismiss</span>
          <svg
            className="h-5 w-5 text-gray-900"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
