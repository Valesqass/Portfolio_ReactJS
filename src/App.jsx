import './index.css'
import Navbar from './Components/Navbar/Navbar'
import Header  from './Components/Header/Header'
import About from './Components/About/About'
import Project from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'


function App() {


  return (
  <div className="container">
    <Navbar />
    <Header />
    <About />
    <Project />
    <Skills />
    <Contact />
    <Footer />
  </div>
  )
}

export default App
