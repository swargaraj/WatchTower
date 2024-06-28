import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 lg:px-8 bg-[#FFFFFF] border-b border-b-neutral-300/45">
      <div className="flex items-center lg:flex-1 space-x-1.5 text-lg">
        <Link href="/">Company</Link>
        <span className="select-none">/</span>
        <span className="text-neutral-500">Status</span>
      </div>
      <div>
        <span className="text-sm px-4">
          <button className="bg-[#F8FAFC] py-2 px-4 border rounded-lg">
            Subscribe
          </button>
        </span>
      </div>
    </header>
  );
}
