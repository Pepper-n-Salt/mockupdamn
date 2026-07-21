import ScreenCarousel from "../../../../components/ScreenCarousel";
import Link from "next/link";

export default function LandingPageScreens() {
  return (
    <section className="mx-auto space-y-20 py-20">
      <div className="space-y-6">
        <h1 className="text-5xl font-light sm:text-5xl md:text-7xl lg:text-9xl">
          Display Management
        </h1>

        <p className="max-w-2xl tracking-widest leading-loose">
          Manage and curate digital content displayed throughout the museum.
        </p>
      </div>

      <section
        id="current-screens"
        className="border-t border-neutral-200 pt-12 space-y-12"
      >
        <h2 className="text-3xl font-light sm:text-3xl md:text-5xl lg:text-7xl">
          Exhibition Screens
        </h2>

        <ScreenCarousel />
      </section>

      {/* <Link
        href="/screens/new"
        className="inline-block text-2xl font-light underline underline-offset-4 transition hover:opacity-70"
      >
        Add new Screen →
      </Link> */}

      {/* mehr als Action behandeln, eher nicht so editioral-style? */}
      <section className="border-t border-neutral-200 pt-12 space-y-12">
        <Link
          href="/landingpage/screens/new"
          className="inline-flex border border-black px-8 py-3 text-sm uppercase tracking-[0.25em] transition-colors duration-300 hover:bg-black hover:text-white"
        >
          Add new screen →
        </Link>
      </section>
    </section>
  );
}
