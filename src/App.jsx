import HomePage from "./pages/home/HomePage"
import NoPage from "./pages/noPage/NoPage"
import {
  BrowserRouter as Router,
  Routes,
  Route  } from "react-router-dom"
import './App.css'

function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </Router> 
    </>
  )
}

export default App
