import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer"
import ContactUs from "./ContactUs";

const HomePage=()=>{
    return(
        <>
            <Header></Header>
            <HeroSection></HeroSection>
            <hr></hr>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </>
    )
};

export default HomePage;