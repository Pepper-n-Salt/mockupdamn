export default function LandingPageNewArtworkPage() {
  return (
    <section className="space-y-10 py-20">
      <div className="space-y-4">
        <h1 className="text-5xl font-light sm:text-5xl md:text-7xl lg:text-9xl">
          Add new Artwork
        </h1>

        <p className="max-w-2xl text-gray-600">
          Fill in the details below to create a new artwork entry for the
          platform.
        </p>
      </div>

      <form className="mx-auto flex w-full max-w-3xl flex-col gap-8 rounded-none border border-black p-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="title"
              className="text-sm uppercase tracking-[0.2em]"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="border-b border-black bg-transparent py-3 outline-none focus:border-2 focus:border-t-0 focus:border-l-0 focus:border-r-0"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="subtitle"
              className="text-sm uppercase tracking-[0.2em]"
            >
              Subtitle
            </label>
            <input
              type="text"
              id="subtitle"
              name="subtitle"
              className="border-b border-black bg-transparent py-3 outline-none focus:border-2 focus:border-t-0 focus:border-l-0 focus:border-r-0"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="artist"
              className="text-sm uppercase tracking-[0.2em]"
            >
              Artist
            </label>
            <input
              type="text"
              id="artist"
              name="artist"
              className="border-b border-black bg-transparent py-3 outline-none focus:border-2 focus:border-t-0 focus:border-l-0 focus:border-r-0"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="biography"
              className="text-sm uppercase tracking-[0.2em]"
            >
              Biography (optional)
            </label>
            <input
              type="text"
              id="biography"
              name="biography"
              className="border-b border-black bg-transparent py-3 outline-none focus:border-2 focus:border-t-0 focus:border-l-0 focus:border-r-0"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="year"
              className="text-sm uppercase tracking-[0.2em]"
            >
              Year of creation
            </label>
            <input
              type="number"
              id="year"
              name="year"
              className="border-b border-black bg-transparent py-3 outline-none focus:border-2 focus:border-t-0 focus:border-l-0 focus:border-r-0"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="origin"
              className="text-sm uppercase tracking-[0.2em]"
            >
              Origin
            </label>
            <input
              type="text"
              id="origin"
              name="origin"
              className="border-b border-black bg-transparent py-3 outline-none focus:border-2 focus:border-t-0 focus:border-l-0 focus:border-r-0"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="originDescription"
              className="text-sm uppercase tracking-[0.2em]"
            >
              Origin description (optional)
            </label>
            <input
              type="text"
              id="originDescription"
              name="originDescription"
              className="border-b border-black bg-transparent py-3 outline-none focus:border-2 focus:border-t-0 focus:border-l-0 focus:border-r-0"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="material"
              className="text-sm uppercase tracking-[0.2em]"
            >
              Material
            </label>
            <input
              type="text"
              id="material"
              name="material"
              className="border-b border-black bg-transparent py-3 outline-none focus:border-2 focus:border-t-0 focus:border-l-0 focus:border-r-0"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="dimensions"
              className="text-sm uppercase tracking-[0.2em]"
            >
              Dimensions
            </label>
            <input
              type="text"
              id="dimensions"
              name="dimensions"
              className="border-b border-black bg-transparent py-3 outline-none focus:border-2 focus:border-t-0 focus:border-l-0 focus:border-r-0"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="description"
            className="text-sm uppercase tracking-[0.2em]"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={6}
            className="resize-none border-b border-black bg-transparent py-3 outline-none focus:border-2 focus:border-t-0 focus:border-l-0 focus:border-r-0"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="image" className="text-sm uppercase tracking-[0.2em]">
            Upload image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            className="cursor-pointer border border-black bg-transparent p-3"
          />
        </div>

        <button
          type="submit"
          className="self-start border border-black px-8 py-3 uppercase tracking-[0.2em] transition-colors duration-300 hover:bg-black hover:text-white"
        >
          Save Artwork
        </button>
      </form>
    </section>
  );
}
