import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Offerings from "./components/Offerings";

const App = () => {
  return (
    <div className="flex items-center justify-center flex-col [font-family:var(--font-family-body)]">
      <Header />
      <Hero />
      <About />
      <Offerings />
      <Footer />
    </div>
  );
};

export default App;
