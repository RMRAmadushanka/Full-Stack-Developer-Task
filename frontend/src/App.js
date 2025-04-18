import Agenda from "./components/Agenda";
import EventOverview from "./components/EventOverview";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OurSpeakers from "./components/OurSpeakers";


function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <EventOverview/>
      <OurSpeakers/>
      <Agenda/>
    </div>
  );
}

export default App;
