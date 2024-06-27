import "./status-dot.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 lg:px-8 bg-[#FFFFFF] border-b border-b-neutral-300/45 select-none">
      <div className="flex items-center lg:flex-1 space-x-1.5 text-lg">
        <Link href="/">Company</Link>
        <span>/</span>
        <span className="text-neutral-500">Status</span>
      </div>
      <div>
        <span className="text-sm px-4">
          <span className="status-dot status-up mr-3"></span>
          All Systems are Operational
        </span>
      </div>
    </header>
  );
}
