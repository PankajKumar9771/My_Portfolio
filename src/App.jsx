import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Work from "./components/Works/work";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Intro />
        <About />
        <Work />
        <Contact />
        
      </div>
    </>
  );
}

export default App;
