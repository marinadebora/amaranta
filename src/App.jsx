import { Route, Routes } from 'react-router-dom'
import Carta from "./components/Carta";
import "./App.css"
import Footer from "./components/Footer";
function App()
{
  return (

    <div className="min-h-screen flex flex-col justify-between ">
      <Routes>
        <Route path='/' element={<Carta />} />
       
      </Routes>


      <footer className="bg-[#000] text-white ">
        fffff
      </footer>
    </div>
  );
}

export default App;
