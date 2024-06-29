import './App.css';
import { NavBar } from "./components/NavBar.js";
import { Header } from "./components/Header.js";
import { Features } from "./components/Features.js";
import { ImageShowcase } from "./components/ImageShowcase.js";
import { Testimonials } from "./components/Testimonials.js";
import { CallToAction } from "./components/CallToAction.js";
import { Footer } from "./components/Footer.js";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Features />
      <ImageShowcase />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
