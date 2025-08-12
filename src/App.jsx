import './App.css'
import About from './Components/About'
import Banner from './Components/Banner'
import ContactForm from './Components/ContactForm'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Skills from './Components/Skills'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <ContactForm></ContactForm>
    
    </div>
  )
}
export default App
