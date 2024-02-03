import Navbar from "./Navbar.jsx"
import Contacts from "./pages/Contacts.jsx"
import Home from "./pages/Home.jsx"
import RegistrationForm from "./pages/RegistrationForm.jsx"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="/registration-form" element={<RegistrationForm />} />
        </Routes>
      </div>
    </>
  )
}

export default App