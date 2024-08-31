import About from "./pages/About"
import Contacts from "./pages/Contacts"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Footer from "./Static/footer/Footer"
import Header from "./Static/header/Header"

import { BrowserRouter, Routes, Route } from "react-router-dom"



const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto p-2 text-center h-screen">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/contacts" element={<Contacts />}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
