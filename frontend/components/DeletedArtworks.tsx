import Link from "next/link";

const deletedArtworks = [
  {
    id: 101,
    title: "Old Landscape",
    artist: "Jane Doe",
    deleted: "10.07.2026",
  },
  {
    id: 102,
    title: "Abstract No. 4",
    artist: "Max Mustermann",
    deleted: "03.07.2026",
  },
];

export default function DeletedArtworks() {
  return (
    <div className="space-y-4">
      {deletedArtworks.map((artwork) => (
        <Link
          key={artwork.id}
          href={`/artworks/deleted/${artwork.id}`}
          className="flex justify-between items-center border rounded-xl px-6 py-4 hover:bg-gray-50 transition"
        >
          <div>
            <h3 className="font-medium">{artwork.title}</h3>
            <p className="text-sm text-gray-500">{artwork.artist}</p>
          </div>

          <p className="text-sm text-gray-500">Deleted: {artwork.deleted}</p>
        </Link>
      ))}
    </div>
  );
}
