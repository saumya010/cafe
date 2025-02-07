import Gallery1 from "../assets/images/gallery-1.webp";
import Gallery2 from "../assets/images/gallery-2.webp";
import Gallery3 from "../assets/images/gallery-3.webp";
import Gallery4 from "../assets/images/gallery-4.webp";
import Gallery5 from "../assets/images/gallery-5.webp";
import Gallery6 from "../assets/images/gallery-6.webp";

const Gallery = () => {
  return (
    <section className="bg-[var(--light-background-color)] w-full">
      <div className="container relative z-10 mx-auto py-24 xl:px-12 2xl:px-36">
        <h3 className="pb-4 text-center text-base font-medium uppercase tracking-widest text-[var(--primary-color)]">
          Gallery
        </h3>
        <h2 className="md:text-4x mx-auto mb-6 text-center text-4xl font-bold">
          <span className="border-b-4 border-[var(--primary-color)] [font-family:var(--font-family-heading)]">
            Immerse Yourself in Culinary Elegance
          </span>
        </h2>
        <div className="grid grid-cols-2 gap-x-6 gap-y-6 lg:grid-cols-3">
          <img
            className="aspect-square object-cover"
            src={Gallery1}
            alt="Gallery"
            data-landingsite-gallery-type="image"
          />
          <img
            className="aspect-square object-cover"
            src={Gallery2}
            alt="Gallery"
            data-landingsite-gallery-type="image"
          />
          <img
            className="aspect-square object-cover"
            src={Gallery3}
            alt="Gallery"
            data-landingsite-gallery-type="image"
          />
          <img
            className="aspect-square object-cover"
            src={Gallery4}
            alt="Gallery"
            data-auth-src="null"
            data-landingsite-gallery-type="image"
          />
          <img
            className="aspect-square object-cover"
            src={Gallery5}
            alt="Gallery"
            data-auth-src="null"
            data-landingsite-gallery-type="image"
          />
          <img
            className="aspect-square object-cover"
            src={Gallery6}
            alt="Gallery"
            data-landingsite-gallery-type="image"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
