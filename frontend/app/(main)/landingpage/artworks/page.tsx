import ArtworkCarousel from "../../../../components/ArtworkCarousel";
import DeletedArtworks from "../../../../components/DeletedArtworks";
import Link from "next/link";

export default function LandingPageArtworks() {
  return (
    <section className="mx-auto py-20 space-y-20">
      <div className="space-y-20">
        <h1 className="text-5xl md:text-7xl sm:text-5xl lg:text-9xl font-light">
          Artworks
        </h1>

        <p className="max-w-2xl tracking-widest leading-loose">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          potenti. Donec tincidunt velit sit amet nibh feugiat luctus.
        </p>
      </div>

      <section
        id="artworks"
        className="space-y-12 border-t border-neutral-200 pt-12"
      >
        <h2 className="text-3xl md:text-5xl sm:text-3xl lg:text-7xl font-light">
          Current Artworks
        </h2>

        <ArtworkCarousel />
      </section>

      <section className="space-y-12 border-t border-neutral-200 pt-12">
        <Link
          href="/landingpage/artworks/new"
          className="self-start border border-black px-8 py-2.5 uppercase tracking-[0.25em] transition-colors duration-300 hover:bg-black hover:text-white"
        >
          Add new Artwork →
        </Link>
      </section>

      <section className="space-y-12 border-t border-neutral-200 pt-12">
        <h2 className="text-3xl md:text-5xl sm:text-3xl lg:text-7xl font-light">
          Deleted Artworks
        </h2>

        <DeletedArtworks />
      </section>
    </section>
  );
}
