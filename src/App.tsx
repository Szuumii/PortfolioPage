import React from 'react';
import {AboutSection} from './Components/About/AboutSection';
import {ContactSection} from './Components/Contact/ContactSection';
import { HomeSection } from './Components/Home/HomeSection';
import {ProjectsSection} from './Components/Projects/ProjectsSection';
import {TechSection} from './Components/Tech/TechSection';

function App() {
  return (
    <div className="App">
      <HomeSection/>
      <AboutSection/>
      <TechSection/>
      <ProjectsSection/>
      <ContactSection/>
    </div>
  );
}

export default App;
