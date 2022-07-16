import React, {useState} from 'react'
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// import components
import About from './components/About';
import Header from './components/Header';
import Projects from './components/Projects';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',

});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),

});

function App() {

  const [navSections] = useState([
    { 
      name: "projects",
      description: "a wide range of completed web projects that span to full stack development."
    },
]);

  const [currentSection, setCurrentSection] = useState(navSections[0]);

  return (
    <ApolloProvider client={client}>
      <Router>
    <div>
      <Header
        navSections={navSections}
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}
        ></Header>
      <main>
        
          <Routes>
            <Route
              path="/"
              element={<About />}
            />
            <Route
              path="/Projects"
              element={<Projects currentSection={currentSection}></Projects>}
            />
            <Route
              path="/Contact"
              element={<ContactForm />}
            />
            <Route
              path="/Resume"
              element={<Resume />}
            />
          </Routes>
       
      </main>
     <Footer />
    </div>
    </Router>
    </ApolloProvider>
  
  );
}

export default App;
