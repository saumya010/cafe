const Offerings = () => {
  return (
    <section className="relative w-full">
      <div
        className="absolute inset-0 h-[30rem] w-full bg-cover bg-center object-cover brightness-[.25] bg-offerings"
        data-landingsite-gallery-type="image"
      ></div>
      <div className="container relative z-10 mx-auto py-24 xl:px-12 2xl:px-36">
        <div className="text-center text-[var(--light-text-color)]">
          <h3 className="pb-4 text-base font-medium uppercase tracking-widest text-[var(--primary-color)]">
            Our Offerings
          </h3>
          <h2 className="mx-auto mb-6 text-center text-3xl font-semibold [font-family:var(--font-family-heading)] md:text-4xl">
            Indulge in Culinary Elegance
          </h2>
          <p className="mb-8 text-center text-xl">
            Immerse yourself in an exquisite dining experience, where every
            detail is crafted to perfection and each dish celebrates the finest
            seasonal ingredients.
          </p>
        </div>
        <div className="flex flex-wrap px-4 gap-6 lg:mt-28 lg:grid lg:flex-none lg:grid-cols-3 lg:place-items-center lg:items-stretch lg:justify-center">
          <div className="w-full p-6 md:w-1/2 lg:w-auto lg:p-0">
            <div className="h-full bg-[#ffffff] p-6 shadow-xl">
              <div className="mb-12 mt-2 flex h-6 w-6 items-center justify-center bg-[var(--dark-background-color)]">
                <div className="relative left-5 top-4 text-5xl text-[var(--primary-color)]">
                  <i className="fa-solid fa-utensils" aria-hidden="true"></i>
                </div>
              </div>
              <h4 className="mb-6 text-2xl font-semibold">
                Exceptional Cuisine
              </h4>
              <p className="mb-6 font-light text-[var(-dark-text-color)]">
                Taste dishes that blend traditional flavors with modern culinary
                techniques, designed to captivate your palate and create
                unforgettable memories.
              </p>
            </div>
          </div>
          <div className="relative w-full p-6 md:w-1/2 lg:-top-12 lg:w-auto lg:p-0">
            <div className="h-full bg-[var(--primary-color)] p-6 shadow-xl">
              <div className="mb-12 mt-2 flex h-6 w-6 items-center justify-center bg-[#ffffff]">
                <div className="relative left-5 top-4 text-5xl text-[var(--dark-text-color)]">
                  <i
                    className="fa-solid fa-bell-concierge"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <h4 className="mb-6 text-2xl font-semibold text-[var(--light-text-color)]">
                Personalized Service
              </h4>
              <p className="mb-6 font-light text-[var(--light-text-color)]">
                Experience tailored, attentive service that makes your visit
                seamless and satisfying, ensuring every moment is delightful.
              </p>
            </div>
          </div>
          <div className="w-full p-6 lg:w-auto lg:p-0">
            <div className="h-full bg-[#ffffff] p-6 shadow-xl">
              <div className="mb-12 mt-2 flex h-6 w-6 items-center justify-center bg-[var(--dark-background-color)]">
                <div className="relative left-5 top-4 text-5xl text-[var(--primary-color)]">
                  <i
                    className="fa-solid fa-glass-cheers"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <h4 className="mb-6 text-2xl font-semibold">
                Exquisite Atmosphere
              </h4>
              <p className="mb-6 font-light text-[var(--dark-text-color)]">
                Dine in a beautifully designed space that exudes elegance,
                making it the perfect backdrop for both celebrations and
                intimate dinners.
              </p>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-auto lg:p-0">
            <div className="h-full bg-[#ffffff] p-6 shadow-xl">
              <div className="mb-12 mt-2 flex h-6 w-6 items-center justify-center bg-[var(--dark-background-color)]">
                <div className="relative left-5 top-4 text-5xl text-[var(--primary-color)]">
                  <i className="fa-solid fa-book" aria-hidden="true"></i>
                </div>
              </div>
              <h4 className="mb-6 text-2xl font-semibold">Curated Menu</h4>
              <p className="mb-6 font-light text-[var(--dark-text-color)]">
                Explore a menu that showcases the best seasonal ingredients
                crafted into delightful dishes aimed at creating lasting
                impressions.
              </p>
            </div>
          </div>
          <div className="relative w-full p-6 md:w-1/2 lg:-top-12 lg:w-auto lg:p-0">
            <div className="h-full bg-[var(--primary-color)] p-6 shadow-xl">
              <div className="mb-12 mt-2 flex h-6 w-6 items-center justify-center bg-[#ffffff] text-4xl">
                <div className="relative left-5 top-4 text-5xl text-[var(--dark-text-color)]">
                  <i className="fa-solid fa-users" aria-hidden="true"></i>
                </div>
              </div>
              <h4 className="mb-6 text-2xl font-semibold text-[var(--light-text-color)]">
                Community Connections
              </h4>
              <p className="mb-6 font-light text-[var(--light-text-color)]">
                Join a community of culinary enthusiasts and enjoy activities
                that connect you with fellow diners and enhance your experience.
              </p>
            </div>
          </div>
          <div className="w-full p-6 lg:w-auto lg:p-0">
            <div className="h-full bg-[#ffffff] p-6 shadow-xl">
              <div className="mb-12 mt-2 flex h-6 w-6 items-center justify-center bg-[var(--dark-background-color)] text-4xl">
                <div className="relative left-5 top-4 text-5xl text-[var(--primary-color)]">
                  <i className="fa-solid fa-leaf" aria-hidden="true"></i>
                </div>
              </div>
              <h4 className="mb-6 text-2xl font-semibold">
                Sustainable Practices
              </h4>
              <p className="mb-6 font-light text-[var(--dark-text-color)]">
                We are committed to eco-friendly practices in our kitchen,
                ensuring that our culinary creations respect both the
                environment and our community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offerings;
