import React, { Component } from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Resume />
        <Portfolio />
        <Testimonials />
        <ContactMe />
        <Footer />
      </div>
    );
  }
}
export default App;
