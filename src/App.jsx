import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/homePage"
import FaqPage from "./pages/FaqPage"
import KelasPage from "./pages/kelasPage"
import TermPage from "./pages/TermPage"
import TestimoniPage from "./pages/TestimoniPage"
import NavbarComponent from "./components/NavbarComponent"
import FooterComponent from "./components/FooterComponent"

function App() {

  return(
    <>
      <NavbarComponent/>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/faq" Component={FaqPage} />
          <Route path="/kelas" Component={KelasPage} />
          <Route path="/syaratketen" Component={TermPage} />
          <Route path="/testimonial" Component={TestimoniPage} />
        </Routes>

      <FooterComponent/>
    </>
  ) 
}

export default App
