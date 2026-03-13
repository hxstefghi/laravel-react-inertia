import { Link } from "@inertiajs/react";

export default function Layout({ children }) {

  return (
    <>

      <header className="py-6">
        <div className="max-w-5xl mx-auto">
          <nav className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-green-600">Home</Link>
            <Link href="/create">Create</Link>
          </nav>
        </div>
      </header>

      <main>
        {children}
      </main>

    </>
  )
}