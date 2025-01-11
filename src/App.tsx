// App.tsx
import { useRef } from "react";
import Navigation from "./components/Navigation";
import HomeSection from "./sections/HomeSection";
import AboutSection from "./sections/AboutSection";
import ProductSection from "./sections/ProductSection";
import "./App.css";

const App = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation
        onHomeClick={() => scrollToSection(homeRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
        onProductClick={() => scrollToSection(productRef)}
      />

      <HomeSection
        ref={homeRef}
        onProductClick={() => scrollToSection(productRef)}
      />

      <AboutSection ref={aboutRef} />

      <ProductSection ref={productRef} />
    </div>
  );
};

export default App;
