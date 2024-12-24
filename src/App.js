import {Routes,Route} from "react-router-dom"

import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"


const App=()=>{
  return(
  <>
    <Header/>
    <Routes>
      <Route path="/" element={ <Home />}/>
      <Route path="/about" element={<About/>} />
      <Route path="/projects" element={<Projects />}/>
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </>
  )
}

export default App