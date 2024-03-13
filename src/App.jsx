// import './App.css'
import NavBar from "./Components/NavBar/NavBar.tsx";
import Footer from "./Components/Footer/Footer.tsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen">
        <NavBar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default App
