import AboutFinastra from "./components/AboutFinastra";
import Agenda from "./components/Agenda";
import EventOverview from "./components/EventOverview";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OurSpeakers from "./components/OurSpeakers";
import RegisterNow from "./components/RegisterNow";
import { ToastContainer } from 'react-toastify';

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
      <ToastContainer/>
    </div>
  );
}

export default App;
