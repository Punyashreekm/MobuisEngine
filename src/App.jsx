import AboutUs from "./components/AboutUs";
import Advance from "./components/Advance";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HowWeWork from "./components/HowWeWork";
import JobApplicationServicePlans from "./components/JobApplicationServicePlans";
import NavBar from "./components/NavBar";
import OurClientsReactions from "./components/OurClientsReactions";
import ResumeBuilding from "./components/ResumeBuilding";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(/Rectangle.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <NavBar />

        <Header />
      </div>
      <HowWeWork />
      <div
        style={{
          backgroundImage: "url(/assets/about-img.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <AboutUs />
      </div>
      <OurClientsReactions />
      <WhyChooseUs />
      <JobApplicationServicePlans />
      <Advance />
      <ResumeBuilding />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
