import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="flex items-center justify-center flex-col [font-family:var(--font-family-body)]">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;
