const Footer = () => {
  return (
    <footer className="bg-[var(--dark-background-color)] w-full">
      <div className="container mx-auto px-6 py-24 xl:px-12 2xl:px-36">
        <div className="grid grid-cols-1 pt-4 md:grid-cols-3 lg:grid-cols-4 lg:space-x-22">
          <div className="mb-8">
            <a
              href="/"
              className="mb-8 block text-3xl tracking-wider text-[var(--light-text-color)] [font-family:var(--font-family-heading)]"
            >
              Café Moderne
            </a>
            <p className="text-left font-light tracking-wider text-[var(--light-text-color)]">
              At demo, we showcase exquisite design with classy elements,
              creating an inviting dining experience for our guests.
            </p>
            <div className="my-8 flex flex-row justify-center text-gray-400 md:justify-start">
              <a href="/" className="mr-3" aria-label="Visit our Facebook">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffffff]">
                  <i
                    className="fa-brands fa-facebook-f text-[var(--primary-color)]"
                    aria-hidden="true"
                  ></i>
                </div>
              </a>
              <a href="/" className="mr-3" aria-label="Visit our Twitter">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffffff]">
                  <i
                    className="fa-brands fa-x-twitter text-[var(--primary-color)]"
                    aria-hidden="true"
                  ></i>
                </div>
              </a>
              <a href="/" className="mr-3" aria-label="Visit our Instagram">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffffff]">
                  <i
                    className="fa-brands fa-instagram text-[var(--primary-color)]"
                    aria-hidden="true"
                  ></i>
                </div>
              </a>
              <a href="/" className="mr-3" aria-label="Visit our LinkedIn">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffffff]">
                  <i
                    className="fa-brands fa-linkedin-in text-[var(--primary-color)]"
                    aria-hidden="true"
                  ></i>
                </div>
              </a>
            </div>
          </div>
          <div className="mb-8">
            <div className="mb-8 border-b-2 border-[var(--primary-color)] pb-4 text-xl tracking-wide text-[var(--light-text-color)]">
              Helpful Links
            </div>
            <a
              href="/"
              className="mb-2 block font-light text-[var(--light-text-color)]"
            >
              Home
            </a>
            <a
              href="/about-us"
              className="mb-2 block font-light text-[var(--light-text-color)]"
            >
              About Us
            </a>
            <a
              href="/menu"
              className="mb-2 block font-light text-[var(--light-text-color)]"
            >
              Menu
            </a>
            <a
              href="/gallery"
              className="gallery-link mb-2 block font-light text-[var(--light-text-color)]"
            >
              Gallery
            </a>
            <a
              href="/reservations"
              className="mb-2 block font-light text-[var(--light-text-color)]"
            >
              Reservations
            </a>
            <a
              href="/contact"
              className="mb-2 block font-light text-[var(--light-text-color)]"
            >
              Contact
            </a>
          </div>
          <div className="mb-8 lg:col-span-2">
            <div className="mb-8 border-b-2 border-[var(--primary-color)] pb-4 text-xl tracking-wide text-[var(--light-text-color)]">
              Reach Us
            </div>
            <div className="mb-2 flex flex-row font-light tracking-wider text-[var(--light-text-color)] items-center">
              <i
                className="fa-solid fa-phone mr-2 w-6 flex-none text-[var(--primary-color)]"
                aria-hidden="true"
              ></i>
              <span>(555) 123 - 4567</span>
            </div>
            <div className="mb-2 flex flex-row font-light tracking-wider text-[var(--light-text-color)] items-center">
              <i
                className="fa-solid fa-envelope mr-2 w-6 flex-none text-[var(--primary-color)]"
                aria-hidden="true"
              ></i>
              <span className="w-[90%] break-words">info@demo.com</span>
            </div>
            <div className="mb-2 flex flex-row font-light tracking-wider text-[var(--light-text-color)] items-center">
              <i
                className="fa-solid fa-location-dot mr-2 w-6 flex-none text-[var(--primary-color)]"
                aria-hidden="true"
              ></i>
              <span>456 Gourmet St. Culinary City, CC</span>
            </div>
            <div className="mb-2 flex flex-row font-light tracking-wider text-[var(--light-text-color)] items-center">
              <i
                className="fa-solid fa-clock mr-2 w-6 flex-none text-[var(--primary-color)]"
                aria-hidden="true"
              ></i>
              <span>Mon - Fri: 9:00am - 10:00pm</span>
            </div>
          </div>
        </div>
        <p className="border-t-2 border-[var(--dark-border-color)] py-4 text-left text-sm text-[var(--gray-text-color)]">
          © {new Date().getFullYear()} Café Moderne, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
