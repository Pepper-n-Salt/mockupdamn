export default function Contact() {
  return (
    <section className="space-y-8">
      <h1 className=" text-5xl md:text-7xl sm:text-5xl lg:text-9xl font-light tracking-tight">
        Contact
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 tracking-widest leading-loose">
        {/* Schrift- tracking? */}
        <div>
          {" "}
          <p>
            Whether you represent a museum, gallery, exhibition space, or
            cultural institution, our platform is designed to help you create
            and manage digital information screens with ease. No technical
            expertise is required – allowing you to focus on your exhibitions
            while presenting content in a professional and engaging way.
          </p>
          <br />
          <h3 className="font-bold ">
            Would you like to become part of our community? Get in touch.
          </h3>
          <br />
          <p>
            To ensure a personal and secure experience, we kindly ask all
            prospective members to complete the contact form before accessing
            our services. Once we receive your message, our team will review
            your request and get back to you as soon as possible. This first
            step helps us learn more about you, answer your questions, and
            provide the most suitable support for your needs. After your inquiry
            has been reviewed, you'll receive further information about joining
            our platform and using our services. We look forward to connecting
            with you and welcoming you to our community.
          </p>
        </div>
        <form
          action=""
          className="flex flex-col gap-8 max-w-md w-full mx-auto p-5"
        >
          {/* p-20  shadow-[0_4px_20px_rgba(0,0,0,0.04)] für die Form?*/}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-sm uppercase tracking-[0.2em]"
            >
              Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              className="border-b border-black bg-transparent py-3 outline-none focus:border-2 focus:border-t-0 focus:border-l-0 focus:border-r-0"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm uppercase tracking-[0.2em]"
            >
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              className="border-b border-black bg-transparent py-3 outline-none focus:border-2 focus:border-t-0 focus:border-l-0 focus:border-r-0"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm uppercase tracking-[0.2em]"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows={6}
              className="border-b border-black bg-transparent py-3 outline-none resize-none focus:border-2 focus:border-t-0 focus:border-l-0 focus:border-r-0"
            />
          </div>
          <button
            type="submit"
            className="self-start border border-black px-8 py-3 uppercase tracking-[0.2em] transition-colors duration-300 hover:bg-black hover:text-white"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
