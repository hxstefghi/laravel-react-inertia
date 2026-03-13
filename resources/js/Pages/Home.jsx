import { Link } from "@inertiajs/react";

export default function Home({ name }) {

  return (
    <>
      <h1>Hello {name}</h1>


      <div class="flex justify-center items-center min-h-screen">
        <Link preserveScroll href="/" className="text-2xl font-bold">{new Date().toLocaleTimeString()}</Link>
      </div>
    </>
  );
}