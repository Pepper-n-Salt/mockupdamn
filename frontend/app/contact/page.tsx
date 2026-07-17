export default function Contact() {
  return (
    <section className="space-y-8">
      <h1 className=" text-5xl md:text-7xl sm:text-5xl lg:text-9xl font-light">
        Contact
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div>
          {" "}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <form
          action=""
          className="flex flex-col gap-4 p-2 rounded-lg m-auto max-w-sm text-white bg-black"
        >
          <div className="flex flex-col gap-4">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="border p-2 rounded-lg bg-white text-black"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="border p-2 rounded-lg bg-white text-black"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="border  p-2 rounded-lg bg-white text-black"
            />
          </div>
          <button
            type="submit"
            className="w-fit m-auto px-2  hover:bg-white hover:text-black rounded-lg bg-blacktext-white border border-black transition-colors duration-300"
          >
            send
          </button>
        </form>
      </div>
    </section>
  );
}
