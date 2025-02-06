import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="flex items-center justify-center flex-col [font-family:var(--font-family-body)]">
      <Header />
      <Footer />
    </div>
  );
};

export default App;
