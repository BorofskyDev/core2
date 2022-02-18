import Navbar from './Components/Navbar/Navbar'
import Main from './Components/Main/Main'
import Solar from './Components/Solar/Solar'
import Pitch from './Components/Pitch/Pitch'
import Services from './Components/Services/Services'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import CTA from './Components/CTA/CTA'
import './index.css'


function App() {
  return (
    <main>
      <Navbar />
      <Main />
      <Solar />
      <Pitch />
      <Services />
      <CTA />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
