import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      <section className="max-w-2xl text-center">
        <h1 className="text-5xl font-bold tracking-tight">DevGallery</h1>

        <p className="mt-6 text-lg text-gray-600">
          Build, organize, and showcase your developer portfolio in one place.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/dashboard"
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Go to Dashboard
          </Link>

          <Link
            href="/login"
            className="rounded-lg border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-100"
          >
            Login
          </Link>
        </div>
      </section>
    </main>
  );
}
