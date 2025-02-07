const Hero = () => {
  return (
    <section className="relative overflow-hidden w-full">
      <div
        className={`absolute inset-0 z-0 h-full w-full bg-cover bg-center object-cover bg-hero`}
        data-landingsite-gallery-type="image"
        data-seo-image=""
      ></div>
      <div className="relative z-10 h-full w-full px-6 py-20 md:my-32 md:left-24 md:w-1/2 md:p-0 xl:w-1/3">
        <div className="flex h-full flex-col justify-center">
          <div className="border-[20px] border-[var(--primary-color)] bg-[#ffffff] p-10 text-center lg:text-left ">
            <h3 className="pb-4 text-base font-medium uppercase tracking-widest text-[var(--primary-color)]">
              Experience Exquisite Dining
            </h3>
            <h1 className="mb-6 border-b-8 border-[var(--primary-color)] text-3xl font-semibold text-[var(--dark-text-color)] [font-family:var(--font-family-heading)] lg:text-5xl">
              A Culinary Haven Awaits You
            </h1>
            <p className="mb-8 text-base font-normal tracking-wide text-[var(--gray-text-color)]">
              Indulge in a unique dining experience where exquisite design meets
              culinary artistry. Our menu highlights seasonal ingredients and
              innovative flavors crafted to make every meal unforgettable.
            </p>
            <a
              href="/reservations"
              className="inline-block border border-[var(--dark-text-color)] bg-[var(--primary-button-bg-color)] px-[var(--button-padding-x)] py-[var(--button-padding-y)] text-base font-semibold uppercase tracking-widest text-[var(--primary-button-text-color)] hover:bg-[var(--primary-button-hover-bg-color)] hover:text-[var(--primary-button-hover-text-color)]"
            >
              <span>Reserve Your Table</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
