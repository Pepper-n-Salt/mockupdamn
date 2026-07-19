import ArchivedExhibitions from "../../../components/ArchivedExhibitions";
import DeletedExhibitions from "../../../components/DeletedExhibitions";
import ExhibitionCarousel from "../../../components/ExhibitionCarousel";
import Link from "next/link";

export default function LandingPageExhibitions() {
  return (
    <section className="mx-auto space-y-20 py-20">
      <div className="space-y-6">
        <h1 className="text-5xl font-light sm:text-5xl md:text-7xl lg:text-9xl">
          Exhibitions
        </h1>

        <p className="max-w-2xl text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          potenti. Donec tincidunt velit sit amet nibh feugiat luctus.
        </p>
      </div>

      <section id="current-exhibitions" className="space-y-8">
        <h2 className="text-3xl font-light sm:text-3xl md:text-5xl lg:text-7xl">
          Current Exhibitions
        </h2>

        <ExhibitionCarousel />
      </section>

      <Link
        href="/landingpage/exhibitions/new"
        className="inline-block text-2xl font-light underline underline-offset-4 transition hover:opacity-70"
      >
        Add new Exhibition →
      </Link>

      <section className="space-y-8">
        <h2 className="text-3xl font-light sm:text-3xl md:text-5xl lg:text-7xl">
          Archived Exhibitions
        </h2>

        <ArchivedExhibitions />
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-light sm:text-3xl md:text-5xl lg:text-7xl">
          Deleted Exhibitions
        </h2>

        <DeletedExhibitions />
      </section>
    </section>
  );
}
