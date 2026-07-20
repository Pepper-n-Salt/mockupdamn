import Link from "next/link";

export default function Login() {
  return (
    <section className="max-w-md">
      <h1 className="text-5xl md:text-7xl sm:text-6xl lg:text-9xl font-light leading-tight">
        Login
      </h1>

      <p className="mt-12 tracking-widest leading-loose">
        Access the Digital Artwork Management Network!
      </p>

      <form action="/login" method="post" className="mt-12">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="username"
              className="text-sm uppercase tracking-[0.2em]"
            >
              Username
            </label>

            <input
              type="text"
              id="username"
              name="username"
              className="border-b border-neutral-900 bg-transparent py-3 outline-none focus:border-b-2"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-sm uppercase tracking-[0.2em]"
            >
              Password
            </label>

            <input
              type="password"
              id="password"
              name="password"
              className="border-b border-neutral-900 bg-transparent py-3 outline-none focus:border-b-2"
            />
          </div>

          <button
            type="submit"
            className="mt-6 self-start border border-black px-8 py-3 uppercase tracking-[0.25em] text-sm transition-colors duration-300 hover:bg-black hover:text-white"
          >
            Login
          </button>
        </div>
      </form>
    </section>
  );
}
