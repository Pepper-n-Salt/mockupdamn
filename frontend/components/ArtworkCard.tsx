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
      className="group overflow-hidden border"
    >
      <img
        src={artwork.image}
        alt={artwork.title}
        className="aspect-square w-full object-cover"
      />

      <div className="space-y-1 p-3">
        <h3 className="text-sm font-semibold">{artwork.title}</h3>

        <p className="text-sm">{artwork.artist}</p>

        <p className="text-xs text-gray-500">Created: {artwork.created}</p>
      </div>
    </Link>
  );
}
