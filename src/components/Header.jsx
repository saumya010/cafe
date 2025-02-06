const Header = () => {
  return (
    <header className="relative z-50 w-full">
      <div className="relative hidden lg:block">
        <div className="absolute left-0 h-full w-1/2 bg-[var(--dark-background-color)]"></div>
        <div className="absolute right-0 h-full w-1/2 bg-[var(--primary-color)]"></div>
        <div className="relative mx-auto w-full">
          <div className="container mx-auto flex">
            <div className="w-3/4 bg-[var(--dark-background-color)] pl-6 xl:pl-12 2xl:pl-36">
              <div className="flex items-center justify-between">
                <div className="py-3">
                  <i
                    className="fa-solid fa-envelope mr-4 text-[var(--primary-color)]"
                    aria-hidden="true"
                  ></i>
                  <span className="text-sm text-[var(--light-text-color)]">
                    info@demo.com
                  </span>
                  <span className="mx-4 text-[var(--light-text-color)]">|</span>
                  <i
                    className="fa-solid fa-location-dot mr-4 text-[var(--primary-color)]"
                    aria-hidden="true"
                  ></i>
                  <span className="text-sm text-[var(--light-text-color)]">
                    123 Culinary Blvd, Foodie City
                  </span>
                </div>
                <div className="h-12 w-10 bg-gradient-to-tr from-[var(--dark-background-color)] from-50% to-[var(--primary-color)] to-50%"></div>
              </div>
            </div>
            <div className="w-1/4 bg-[var(--primary-color)] pr-6 xl:pr-12 2xl:pr-32">
              <div className="flex items-center justify-end py-3">
                <a href="/" className="mr-3" aria-label="Follow us on Facebook">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ffffff]">
                    <i
                      className="fa-brands fa-facebook-f fa-xs text-[var(--primary-color)]"
                      aria-hidden="true"
                    ></i>
                  </div>
                </a>
                <a href="/" className="mr-3" aria-label="Follow us on Twitter">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ffffff]">
                    <i
                      className="fa-brands fa-x-twitter fa-xs text-[var(--primary-color)]"
                      aria-hidden="true"
                    ></i>
                  </div>
                </a>
                <a
                  href="/"
                  className="mr-3"
                  aria-label="Follow us on Instagram"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ffffff]">
                    <i
                      className="fa-brands fa-instagram fa-xs text-[var(--primary-color)]"
                      aria-hidden="true"
                    ></i>
                  </div>
                </a>
                <a
                  href="/"
                  className="mr-3"
                  aria-label="Connect with us on LinkedIn"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ffffff]">
                    <i
                      className="fa-brands fa-linkedin-in fa-xs text-[var(--primary-color)]"
                      aria-hidden="true"
                    ></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="container mx-auto py-6">
        <div className="flex items-center justify-between relative">
          <div className="px-4 sm:px-6 xl:pl-12 2xl:pl-36">
            <a
              href="/"
              className="text-xl font-semibold text-[var(--primary-color)] [font-family:var(--font-family-heading)] sm:text-3xl"
            >
              <span>Café Moderne</span>
            </a>
          </div>
          <button
            id="mobile-menu-button"
            data-collapse-toggle="navigation-menu"
            type="button"
            className="pr-6 text-gray-800 lg:hidden"
            aria-controls="navigation-menu"
            aria-expanded="false"
            aria-label="Navigation Menu"
          >
            <i
              className="fa-regular fa-bars feather feather-menu"
              data-fontawesome-icon="fa-bars"
              data-landingsite-gallery-type="icon"
              aria-hidden="true"
            ></i>
          </button>
          <div
            id="navigation-menu"
            className="hidden absolute z-50 left-0 top-full mt-4 w-full bg-[#ffffff] pb-4 lg:pr-6 lg:static lg:mt-0 lg:flex flex-1 lg:items-center lg:justify-between lg:pb-0 xl:pr-12 2xl:pr-36"
          >
            <ul className="flex flex-col lg:px-6 lg:flex-row flex-1 lg:justify-center lg:items-center lg:space-x-6">
              <li className="flex items-center p-2 border-t border-gray-200 lg:border-t-transparent lg:p-0">
                <a
                  href="/menu"
                  className="text-xs font-semibold uppercase tracking-widest text-[var(--dark-text-color)] 2xl:text-sm"
                >
                  Menu
                </a>
              </li>
              <li className="flex items-center p-2 border-t border-gray-200 lg:border-t-transparent lg:p-0">
                <div className="group relative">
                  <button className="flex w-full cursor-pointer flex-row items-center gap-1 underline-offset-8 lg:justify-center text-xs font-semibold uppercase tracking-widest text-[var(--dark-text-color)] 2xl:text-sm">
                    <span>Our Story</span>
                    <i
                      className="fa-regular fa-chevron-down ml-1 transition-['rotate'] lg:group-hover:rotate-[180deg]"
                      aria-hidden="true"
                    ></i>
                  </button>
                  <div className="left-0 top-full z-50 hidden w-full text-black lg:absolute lg:w-[260px] lg:pt-2 lg:group-hover:block">
                    <div className="mt-2 bg-white p-1.5 lg:rounded-lg lg:border lg:border-gray-200 lg:shadow-sm">
                      <a
                        className="block cursor-pointer border-b border-solid px-3 py-1.5 hover:bg-[#1900410a] lg:py-3 lg:font-medium"
                        href="/about-us"
                      >
                        About Us
                      </a>
                      <a
                        className="block cursor-pointer px-3 py-1.5 hover:bg-[#1900410a] lg:py-3 lg:font-medium"
                        href="/gallery"
                      >
                        Gallery
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="flex items-center p-2 border-t border-gray-200 lg:border-t-transparent lg:p-0">
                <a
                  href="/reservations"
                  className="text-xs font-semibold uppercase tracking-widest text-[var(--dark-text-color)] 2xl:text-sm"
                >
                  Reservations
                </a>
              </li>
            </ul>
            <div className="flex flex-col mt-4 lg:flex-row items-center lg:mt-0">
              <a
                href="/contact"
                className="px-6 py-3 bg-[var(--primary-button-bg-color)] text-[var(--primary-button-text-color)] font-semibold rounded-lg"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
