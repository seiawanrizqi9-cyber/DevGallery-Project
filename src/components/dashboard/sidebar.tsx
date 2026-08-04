import Link from "next/link";

export default function DashboardSidebar() {
  return (
    <aside className="flex w-64 flex-col bg-slate-900 text-white shadow-lg">
      <div className="border-b border-slate-700 px-6 py-6">
        <h2 className="text-2xl font-bold tracking-wide">
          DevGallery
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Developer Dashboard
        </p>
      </div>

      <nav className="flex flex-1 flex-col gap-2 p-4">
        <Link
          href="/dashboard"
          className="rounded-lg px-4 py-3 transition hover:bg-slate-800"
        >
          🏠 Dashboard
        </Link>

        <Link
          href="/dashboard/galleries"
          className="rounded-lg px-4 py-3 transition hover:bg-slate-800"
        >
          📁 Galleries
        </Link>

        <Link
          href="/dashboard/settings"
          className="rounded-lg px-4 py-3 transition hover:bg-slate-800"
        >
          ⚙️ Settings
        </Link>
      </nav>
    </aside>
  );
}