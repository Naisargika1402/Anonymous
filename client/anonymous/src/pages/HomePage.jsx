import HeroSection from "../components/HeroSection";
import ContactUs from "./ContactUs";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection></HeroSection>
      <hr />
      <ContactUs></ContactUs>
      <Footer />
    </>
  );
};

export default HomePage;
