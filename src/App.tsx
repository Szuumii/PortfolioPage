import React from 'react';
import About from './Components/About/about';
import Contact from './Components/Contact/contact';
import Home from './Components/Home/home';
import Projects from './Components/Projects/projects';
import Tech from './Components/Tech/tech';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Tech/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
