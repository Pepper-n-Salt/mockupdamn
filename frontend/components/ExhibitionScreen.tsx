import Image from "next/image";

type Exhibition = {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  image: string;
};

type ExhibitionScreenProps = {
  exhibition: Exhibition;
};

export default function ExhibitionScreen({
  exhibition,
}: ExhibitionScreenProps) {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Image
        src={exhibition.image}
        alt={exhibition.title}
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/40" />

      <section className="relative z-10 flex min-h-screen flex-col justify-end px-12 py-16 text-white">
        <div className="max-w-4xl space-y-6">
          <p className="text-sm uppercase tracking-[0.35em] text-white/80">
            {exhibition.period}
          </p>

          <h1 className="text-6xl font-light leading-tight md:text-8xl">
            {exhibition.title}
          </h1>

          <h2 className="text-3xl font-light text-white/80 md:text-5xl">
            {exhibition.subtitle}
          </h2>

          <p className="max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl">
            {exhibition.description}
          </p>
        </div>
      </section>
    </main>
  );
}
