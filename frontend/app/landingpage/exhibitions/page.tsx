import ArchivedExhibitions from "../../../components/ArchivedExhibitions";
import DeletedExhibitions from "../../../components/DeletedExhibitions";
import ExhibitionCarousel from "../../../components/ExhibitionCarousel";
import Link from "next/link";

export default function LandingPageExhibitions() {
  return (
    <section className="space-y-20">
      <div className="space-y-12">
        <h1 className="text-5xl font-light sm:text-5xl md:text-7xl lg:text-9xl">
          Exhibitions
        </h1>

        <p className="max-w-2xl tracking-widest leading-loose">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          potenti. Donec tincidunt velit sit amet nibh feugiat luctus.
        </p>
      </div>

      <section
        id="current-exhibitions"
        className="border-t border-neutral-200 pt-12 space-y-12"
      >
        <h2 className="text-3xl font-light sm:text-3xl md:text-5xl lg:text-7xl">
          Current Exhibitions
        </h2>

        <ExhibitionCarousel />
      </section>

      <section className="border-t border-neutral-200 pt-12 space-y-12">
        <Link
          href="/landingpage/exhibitions/new"
          className="self-start border border-black px-8 py-2.5 uppercase tracking-[0.25em] transition-colors duration-300 hover:bg-black hover:text-white"
        >
          Add new Exhibition →
        </Link>
      </section>

      <section className="border-t border-neutral-200 pt-12 space-y-12">
        <h2 className="text-3xl font-light sm:text-3xl md:text-5xl lg:text-7xl">
          Archived Exhibitions
        </h2>

        <ArchivedExhibitions />
      </section>

      <section className="border-t border-neutral-200 pt-12 space-y-12">
        <h2 className="text-3xl font-light sm:text-3xl md:text-5xl lg:text-7xl">
          Deleted Exhibitions
        </h2>

        <DeletedExhibitions />
      </section>
    </section>
  );
}
