import About from "./components/About";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Offerings from "./components/Offerings";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div className="flex items-center justify-center flex-col [font-family:var(--font-family-body)]">
      <Header />
      <Hero />
      <About />
      <Offerings />
      <Gallery />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
