import Contact from "./Component/Contactus/Contact";
import Faq from "./Component/FAQ/Faq";
import Featured from "./Component/Featured/Featured";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Hero from "./Component/Hero/Hero";
import Testimonial from "./Component/Testimonial/Testimonial";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Featured />
      <Faq />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
