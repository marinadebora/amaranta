import { NavLink } from "react-router";
/* import { useAuth } from "../../Store/authStore"; */
import {  useState } from "react"
import { FaEdit } from "react-icons/fa";
import { BiDrink } from "react-icons/bi";
import { RiDrinks2Fill, RiCake3Line  } from "react-icons/ri";
import { LuIceCreamBowl, LuSalad, LuSandwich, LuPizza} from "react-icons/lu";
import { GiMeal } from "react-icons/gi";
import { MdFoodBank } from "react-icons/md";
import { FiCoffee } from "react-icons/fi";

const NewNavbar = () =>
{
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className='w-full'>
      <div className='bg-[#f9eae6] w-full h-[6rem] flex items-center justify-between'>
        <div className=""><img className='w-[5rem]' src="/amarantaLogo.svg" alt="" /></div>
     <div className="w-[12rem] h-full mt-[4rem] ">
     <div className=" ">
      <button onClick={() => setIsOpen(!isOpen)} className="text-[#769164] hover:text-[#4a5b3f] cursor-pointer">Crear Productos</button>
      </div>

      <div className={`transition-transform transform z-50 ${isOpen ? 'translate-x-0 translate-y-0' : 'hidden'}`}>{/* -translate-x-full */}
      <ul className="bg-white inset-y-10 -left-0  top-10 h-full shadow-xl flex flex-col gap-2">
        <li className="cursor-pointer hover:bg-[#f2d0c7] flex items-center gap-2"><FiCoffee /> Cafeteria</li>
        <li className="cursor-pointer hover:bg-[#f2d0c7] flex items-center gap-2"><RiCake3Line /> Pasteletria</li>
        <li className="cursor-pointer hover:bg-[#f2d0c7] flex items-center gap-2"><MdFoodBank /> Tapeo</li>
        <li className="cursor-pointer hover:bg-[#f2d0c7] flex items-center gap-2"><LuPizza /> Pizzas Tartas y Empanadas</li>
        <li className="cursor-pointer hover:bg-[#f2d0c7] flex items-center gap-2"><LuSandwich /> Entre Panes</li>
        <li className="cursor-pointer hover:bg-[#f2d0c7] flex items-center gap-2"><LuSalad /> Ensaladas y Guarniciones</li>
        <li className="cursor-pointer hover:bg-[#f2d0c7] flex items-center gap-2"><GiMeal /> Al Plato</li>
        <li className="cursor-pointer hover:bg-[#f2d0c7] flex items-center gap-2"><LuIceCreamBowl /> Postres</li>
        <li className="cursor-pointer hover:bg-[#f2d0c7] flex items-center gap-2"><RiDrinks2Fill /> Bebidas</li>
        <li className="cursor-pointer hover:bg-[#f2d0c7] flex items-center gap-2"><BiDrink />Con Alcohol</li>
      </ul>
      </div>


     </div>

      </div>
 
    </nav>
  );
};


export default NewNavbar;