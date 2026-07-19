import ArtworkCarousel from "../../../components/ArtworkCarousel";
import DeletedArtworks from "../../../components/DeletedArtworks";
import Link from "next/link";

export default function LandingPageArtworks() {
  return (
    <section className="mx-auto py-20 space-y-20">
      <div className="space-y-6">
        <h1 className=" text-5xl md:text-7xl sm:text-5xl lg:text-9xl font-light">
          Artworks
        </h1>

        <p className="max-w-2xl text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          potenti. Donec tincidunt velit sit amet nibh feugiat luctus.
        </p>
      </div>

      <section id="artworks" className="space-y-8">
        <h2 className="text-3xl md:text-5xl sm:text-3xl lg:text-7xl font-light">
          Current Artworks
        </h2>

        <ArtworkCarousel />
      </section>

      <Link
        href="/landingpage/artworks/new"
        className="inline-block underline underline-offset-4 hover:opacity-70 transition text-2xl font-light "
      >
        Add new Artwork →
      </Link>

      <section className="space-y-8">
        <h2 className="text-3xl md:text-5xl sm:text-3xl lg:text-7xl font-light">
          Deleted Artworks
        </h2>

        <DeletedArtworks />
      </section>
    </section>
  );
}
