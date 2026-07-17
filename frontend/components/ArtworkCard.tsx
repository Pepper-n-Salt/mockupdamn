import Link from "next/link";

interface Artwork {
  id: string | number;
  image: string;
  title: string;
  artist: string;
  created: string;
}

interface ArtworkCardProps {
  artwork: Artwork;
}

export default function ArtworkCard({ artwork }: ArtworkCardProps) {
  return (
    <Link
      href={`/artworks/${artwork.id}`}
      className="group border rounded-2xl overflow-hidden"
    >
      <img
        src={artwork.image}
        alt={artwork.title}
        className="aspect-square object-cover w-full"
      />

      <div className="p-6 space-y-2">
        <h3 className="text-xl font-semibold">{artwork.title}</h3>

        <p>{artwork.artist}</p>

        <p className="text-sm text-gray-500">Created: {artwork.created}</p>
      </div>
    </Link>
  );
}
