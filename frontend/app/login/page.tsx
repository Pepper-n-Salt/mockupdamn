import Link from "next/link";

export default function Login() {
  return (
    <section className="max-w-md">
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light leading-tight">
        Login
      </h1>

      <p className="mt-4 text-sm text-neutral-500">
        Access the Digital Artwork Management Network!
      </p>

      <form action="/login" method="post" className="mt-12">
        <div className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Username"
            className="border-b border-black py-3 outline-none bg-transparent placeholder:text-neutral-400"
          />

          <input
            type="password"
            placeholder="Code"
            className="border-b border-black py-3 outline-none bg-transparent placeholder:text-neutral-400"
          />

          {/* später unbedingt als button mit submit bauen */}
          <Link
            href="/landingpage"
            className="mt-6 inline-flex w-fit border border-black px-8 py-3 uppercase tracking-[0.25em] text-sm transition-colors duration-300 hover:bg-black hover:text-white"
          >
            Login
          </Link>
        </div>
      </form>
    </section>
  );
}
