import React, {useState} from 'react'
import './App.css';

// import components
import About from './components/About';
import Header from './components/Header';
import Projects from './components/Projects';
import ContactForm from './components/Contact';

function App() {

  const [contactSelected, setContactSelected] = useState(false);


  const [navSections] = useState([
    { 
      name: "projects",
      description: "a wide range of completed web projects that span to full stack development."
    },
]);

  const [currentSection, setCurrentSection] = useState(navSections[0]);

  return (
    <div>
      <Header
        navSections={navSections}
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        ></Header>
      <main>
        {!contactSelected ? (
          <>
          <Projects currentSection={currentSection}></Projects>
          <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
        
        
      </main>
      <footer>
        
      </footer>
    </div>
  
  );
}

export default App;
