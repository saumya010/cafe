const Contact = () => {
  return (
    <section className="relative bg-[var(--light-background-color)] w-full">
      <div
        className="absolute inset-0 h-[30rem] w-full bg-cover bg-center object-cover brightness-[.25] bg-contact"
        data-landingsite-gallery-type="image"
        data-media='{"id":"1975456518","src":"iStock","type":"image"}'
      ></div>
      <div className="container relative z-10 mx-auto px-6 py-24 xl:px-12 2xl:px-36">
        <div className="text-center text-white">
          <h3 className="pb-4 text-base font-medium uppercase tracking-widest text-[var(--primary-color)]">
            Connect with Us
          </h3>
          <h2 className="mx-auto mb-6 text-center text-3xl font-semibold md:text-4xl">
            <span className="border-b-4 border-[var(--primary-color)] [font-family:var(--font-family-heading)]">
              Let&apos;s Elevate Your Experience
            </span>
          </h2>
          <p className="mb-8 text-center text-xl font-light">
            Explore how we transform dining into a celebration of taste and
            artistry. Reach out to inquire about our exquisite offerings or to
            make a reservation.
          </p>
        </div>
        <div className="flex flex-col bg-[#ffffff] p-8 shadow-2xl lg:flex-row">
          <div className="relative overflow-hidden lg:w-1/2">
            <div
              className="absolute inset-0 h-[30rem] w-full bg-cover bg-center object-cover brightness-[.25] bg-contact-inner"
              data-landingsite-gallery-type="image"
              data-media='{"id":"2160026798","src":"iStock","type":"image"}'
            ></div>
            <div className="relative z-[1] p-4 text-white sm:p-10">
              <h3 className="pb-4 text-base font-medium uppercase tracking-widest">
                Our Contact Details
              </h3>
              <h2 className="mx-auto mb-6 text-xl font-medium sm:text-2xl md:text-4xl">
                <span className="border-b-4 border-[var(--primary-color)]">
                  Get in Touch with Us
                </span>
              </h2>
              <div className="mb-2 font-light tracking-wider sm:text-lg">
                <i className="fa-solid fa-phone mr-2" aria-hidden="true"></i>
                <span>(555) 123 - 4567</span>
              </div>
              <div className="mb-2 font-light tracking-wider sm:text-lg">
                <i className="fa-solid fa-envelope mr-2" aria-hidden="true"></i>
                <span>info@cafémoderne.com</span>
              </div>
              <div className="mb-2 font-light tracking-wider sm:text-lg">
                <i
                  className="fa-solid fa-location-dot mr-2"
                  aria-hidden="true"
                ></i>
                <span>456 Gourmet St. Denver, CO</span>
              </div>
              <div className="mb-2 font-light tracking-wider sm:text-lg">
                <i className="fa-solid fa-clock mr-2" aria-hidden="true"></i>
                <span>Mon - Fri: 9:00am - 10:00pm</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <form
              className="space-y-6 pt-8 sm:p-8"
              data-landingsite-contact-form=""
            >
              <div>
                <label
                  htmlFor="name"
                  className="text-bs font-semibold text-[var(--dark-text-color)]"
                >
                  Your Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="mt-2 w-full bg-[var(--light-background-color)] p-2 shadow-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-[var(--dark-text-color)]"
                >
                  Your Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  className="mt-2 w-full bg-[var(--light-background-color)] p-2 shadow-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="text-sm font-semibold text-[var(--dark-text-color)]"
                >
                  Your Contact Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="mt-2 w-full bg-[var(--light-background-color)] p-2 shadow-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-[var(--dark-text-color)]"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  className="mt-2 w-full bg-[var(--light-background-color)] p-2 shadow-sm"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-[var(--primary-button-bg-color)] px-4 py-3 text-sm font-normal uppercase tracking-wider text-[var(--primary-button-text-color)] hover:bg-[var(--primary-button-hover-bg-color)]"
                >
                  Send Your Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
