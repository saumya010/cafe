import AboutImage from "../assets/images/about-image.webp";

const About = () => {
  return (
    <section className="py-4 md:py-8 code-section" id="sn7i3fi">
      <div className="container mx-auto py-12 xl:px-12 2xl:px-36">
        <div className="flex flex-col items-stretch lg:flex-row">
          <div className="relative flex-1 p-10 lg:w-1/2">
            <div className="absolute bottom-0 right-0 z-0 h-4/5 w-4/5 bg-[var(--dark-background-color)]"></div>
            <img
              className="relative bottom-10 right-10 z-[1] aspect-square object-cover lg:absolute xl:relative xl:bottom-0 xl:right-0"
              src={AboutImage}
              data-landingsite-gallery-type="image"
            />
            <div className="absolute bottom-0 right-0 z-[2] h-2/5 w-1/2 bg-[var(--light-text-color)] pl-3 pt-3">
              <div className="flex h-full w-full flex-col items-center justify-center bg-[var(--primary-color)] p-10 text-[var(--light-text-color)]">
                <div className="mb-2 text-6xl font-bold text-[var(--light-text-color)]">
                  Exquisite Design
                </div>
                <div className="text-[var(--light-text-color)] lg:text-[var(--light-text-color)] md:text-[var(--dark-text-color)] sm:text-[var(--dark-text-color)]">
                  Unforgettable Dining Moments
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 sm:px-14 pt-10 lg:w-1/2">
            <h3 className="pb-4 text-base font-medium uppercase tracking-widest text-[var(--primary-color)]">
              About Café Moderne
            </h3>
            <h1 className="mb-6 border-b-8 border-[var(--primary-color)] text-2xl font-semibold text-[var(--dark-text-color)] [font-family:var(--font-family-heading)] sm:text-3xl md:text-4xl">
              Indulge in Culinary Elegance
            </h1>
            <p className="mb-8 text-base font-normal tracking-wide text-[var(--gray-text-color)]">
              Experience a refined setting where every detail, from the ambiance
              to the dishes, is thoughtfully crafted to enhance your dining
              journey. Our seasonal menu reflects innovative culinary artistry
              with locally-sourced ingredients, giving every meal a narrative.
            </p>
            <div className="mb-8 flex flex-row space-x-6">
              <div className="flex flex-1 flex-col">
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--primary-color)] text-3xl text-[var(--light-text-color)]">
                  <i className="fa-solid fa-bullseye" aria-hidden="true"></i>
                </div>
                <div className="mb-1 text-2xl font-medium">
                  Elevated Experience
                </div>
                <div className="tracking-wide text-[var(--gray-text-color)]">
                  We curate memorable meals for all occasions, from intimate
                  dinners to grand celebrations.
                </div>
              </div>
              <div className="flex flex-1 flex-col">
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--primary-color)] text-3xl text-[var(--light-text-color)]">
                  <i className="fa-regular fa-eye" aria-hidden="true"></i>
                </div>
                <div className="mb-1 text-2xl font-medium">
                  Sophisticated Ambiance
                </div>
                <div className="tracking-wide text-[var(--gray-text-color)]">
                  Immerse yourself in a captivating atmosphere that elevates
                  your dining experience.
                </div>
              </div>
            </div>
            <a
              href="/reservations"
              className="inline-block bg-[var(--primary-button-bg-color)] px-[var(--button-padding-x)] py-[var(--button-padding-y)] text-base font-semibold uppercase tracking-widest text-[var(--primary-button-text-color)] hover:bg-[var(--primary-button-hover-bg-color)] hover:text-[var(--primary-button-hover-text-color)]"
            >
              Reserve Your Table
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
