import React from "react";
import Header from "./Components/Header"
import About from "./Components/About"
import Resume from "./Components/Resume"
import Portfolio from "./Components/Portfolio"
import Testimonials from "./Components/Testimonials"
import Contactme from "./Components/Contactme"
import Footer from "./Components/Footer"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Contactme />
        <Footer />
      </div>
    );
  }
}
export default App;
