import AboutFinastra from "./components/AboutFinastra";
import Agenda from "./components/Agenda";
import EventOverview from "./components/EventOverview";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OurSpeakers from "./components/OurSpeakers";
import RegisterNow from "./components/RegisterNow";


function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <EventOverview/>
      <OurSpeakers/>
      <Agenda/>
      <AboutFinastra/>
      <RegisterNow/>
      <Footer/>
    </div>
  );
}

export default App;
