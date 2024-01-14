import HeroSection from "../components/HeroSection";
import ContactUs from "./ContactUs";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ChooseUs from "../components/ChooseUs";
import CounterUp from "../components/CounterUp";
import HomeServices from "../components/HomeServices";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection></HeroSection>
      <HomeServices></HomeServices>
      <ChooseUs></ChooseUs>
      <CounterUp></CounterUp>
      <ContactUs></ContactUs>
      <Footer />
    </>
  );
};

export default HomePage;
