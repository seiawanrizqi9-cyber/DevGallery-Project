export default function DashboardHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6 shadow-sm">
      <div>
        <h1 className="text-xl font-semibold text-slate-800">
          Dashboard
        </h1>

        <p className="text-sm text-slate-500">
          Welcome to DevGallery
        </p>
      </div>

      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 font-semibold text-white">
        R
      </div>
    </header>
  );
}