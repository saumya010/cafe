import User1 from "../assets/images/user1.jpg";
import User2 from "../assets/images/user2.jpg";
import User3 from "../assets/images/user3.jpg";

const Card = ({ image, name, description, title }) => {
  return (
    <div className="w-full max-w-96 relative flex flex-col items-center justify-center rounded-md bg-[#ffffff] py-12 shadow-[0_0_6px_1px_rgba(0,0,0,0.1)] lg:w-96">
      <div className="absolute right-4 top-2">
        <i
          className="fa-sharp fa-solid fa-quote-left text-5xl text-[var(--primary-color)]"
          aria-hidden="true"
        ></i>
      </div>
      <img
        className="mb-8 h-[75px] w-[75px] rounded-full object-cover"
        src={image}
        alt={name}
      />
      <div className="mb-2">
        <i
          className="fa-solid fa-star fa-xs text-yellow-500"
          aria-hidden="true"
        ></i>
        <i
          className="fa-solid fa-star fa-xs text-yellow-500"
          aria-hidden="true"
        ></i>
        <i
          className="fa-solid fa-star fa-xs text-yellow-500"
          aria-hidden="true"
        ></i>
        <i
          className="fa-solid fa-star fa-xs text-yellow-500"
          aria-hidden="true"
        ></i>
        <i
          className="fa-solid fa-star fa-xs text-yellow-500"
          aria-hidden="true"
        ></i>
      </div>
      <div className="mb-4 px-10 text-center font-light tracking-wide text-[var(--dark-text-color)]">
        {description}
      </div>
      <div className="font-medium uppercase tracking-wide">{name}</div>
      <div className="font-medium tracking-wide text-[var(--primary-color)]">
        {title}
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="code-section w-full">
      <div className="container relative z-10 mx-auto px-4 py-24 xl:px-12 2xl:px-36">
        <h3 className="pb-4 text-center text-base font-medium uppercase tracking-widest text-[var(--primary-color)]">
          Testimonials
        </h3>
        <h2 className="md:text-4x mx-auto mb-12 text-center text-4xl font-bold">
          <span className="border-b-4 border-[var(--primary-color)] [font-family:var(--font-family-heading)]">
            What Our Guests Have to Say
          </span>
        </h2>
        <div className="flex flex-col items-stretch justify-center space-y-12 lg:flex-row lg:space-x-6 lg:space-y-0">
          <Card
            image={User1}
            name="Sarah Lee"
            description="Every visit feels like a celebration of taste and atmosphere. The ambiance is exquisitely designed for any occasion, with dishes that delight the senses."
            title="Satisfied Guest"
          />
          <Card
            image={User2}
            name="Jon Doe"
            description="The stunning decor and warm atmosphere instantly captivated me. The seasonal menu reflects the depth of culinary artistry."
            title="Food Enthusiast"
          />
          <Card
            image={User3}
            name="Clark Kent"
            description="My experience was exceptional. The delicate balance between past and present is evident in every detail, showcasing the utmost respect for history and dining."
            title="Culinary Artist"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
