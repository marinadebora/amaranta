import { Route, Routes } from 'react-router-dom'
import Carta from "./components/Carta";
import "./App.css"
import Footer from "./components/Footer";
function App()
{
  return (

    <div className="min-h-screen flex flex-col justify-around py-2 ">
  
      <Routes>
        <Route path='/' element={<Carta />} />
       
      </Routes>


   <Footer />
 
    </div>
  );
}

export default App;
