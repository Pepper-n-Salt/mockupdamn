import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 ">
      <div className="flex gap-8 px-8 py-8 ">
        <Link href="/imprint">Imprint</Link>

        <Link href="/privacy">Privacy Policies</Link>
      </div>
    </footer>
  );
}
