import Link from "next/link";

export default function Login() {
  return (
    <section className="space-y-8 m-auto max-w-sm">
      <h1 className="text-5xl md:text-7xl sm:text-5xl lg:text-9xl font-light">
        Login
      </h1>
      <form action="/login" method="post">
        <div className="flex flex-col gap-4 w-sm  ">
          <input
            type="text"
            placeholder="Username"
            className="border px-3 py-2 outline-none rounded-2xl "
          />
          <input
            type="password"
            placeholder="Code"
            className="border px-3 py-2 outline-none rounded-2xl "
          />
          <Link href="/landingpage" className="text-sm text-gray-500 m-auto">
            <button
              type="submit"
              className="bg-black text-white px-3 py-2 rounded-2xl hover:bg-white hover:text-black border border-black transition-colors duration-300 w-fit "
            >
              Login
            </button>
          </Link>
        </div>
      </form>
    </section>
  );
}
