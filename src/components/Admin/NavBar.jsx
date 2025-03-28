import { NavLink, useNavigate } from "react-router";
/* import { useAuth } from "../../Store/authStore"; */
import {  useState } from "react"
import { FaEdit } from "react-icons/fa";

function NavBar() {
  const navigate = useNavigate()
  /* const { logout } = useAuth(); */
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const handleLogout = async () => {
    /* await logout(); */
    navigate("/");
  };

  return (
    <div className={` fixed inset-y-0 left-0 w-64 bg-gray-800  transition-transform transform z-50 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <aside className="fixed left-0 top-0 h-screen w-64 bg-white shadow-xl border-r border-gray-100">
        <div className="p-1">
          <div className=" w-full h-full border border-black flex items-center justify-between ">
            <img className=" w-[5rem]" src="/amarantaLogo.svg" alt="Logo" />
            <div className="flex items-start  border h-[5rem]"><button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>x</button></div>
            
          </div>

          <nav className="flex flex-col space-y-1.5">
         {/*    <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg transition-colors ${isActive ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-teal-50"
                }`
              }
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Inicio
            </NavLink>  */}
          {/*   <NavLink
              to="/dashboard/list"
              end
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg transition-colors ${isActive ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-teal-50"
                }`
              }
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Pendientes
            </NavLink> */}
       {/*      <NavLink
              to="/dashboard/tabs"
              end
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg transition-colors ${isActive ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-teal-50"
                }`
              }
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
              Registros
            </NavLink> */}
            <NavLink
              to="/addProducts"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg transition-colors ${isActive ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-teal-50"
                }`
              }
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Agregar Productos
            </NavLink>
            <NavLink
              to="/dashboard/users"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg transition-colors ${isActive ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-teal-50"
                }`
              }
            >
           {/*    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg> */} <div className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><FaEdit /></div>  
             Editar Productos
            </NavLink>
            <NavLink
              to="/dashboard/invoice"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg transition-colors ${isActive ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-teal-50"
                }`
              }
            >
              <svg className="mr-4" xmlns="http://www.w3.org/2000/svg"  width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor">
                <path  d="M20.016 2C18.903 2 18 4.686 18 8h2.016c.972 0 1.457 0 1.758-.335c.3-.336.248-.778.144-1.661C21.64 3.67 20.894 2 20.016 2" /><path d="M18 8.054v10.592c0 1.511 0 2.267-.462 2.565c-.755.486-1.922-.534-2.509-.904c-.485-.306-.727-.458-.996-.467c-.291-.01-.538.137-1.062.467l-1.911 1.205c-.516.325-.773.488-1.06.488s-.545-.163-1.06-.488l-1.91-1.205c-.486-.306-.728-.458-.997-.467c-.291-.01-.538.137-1.062.467c-.587.37-1.754 1.39-2.51.904C2 20.913 2 20.158 2 18.646V8.054c0-2.854 0-4.28.879-5.167C3.757 2 5.172 2 8 2h12" /><path d="M10 8c-1.105 0-2 .672-2 1.5s.895 1.5 2 1.5s2 .672 2 1.5s-.895 1.5-2 1.5m0-6c.87 0 1.612.417 1.886 1M10 8V7m0 7c-.87 0-1.612-.417-1.886-1M10 14v1" /></g>
              </svg>
              Reporte
            </NavLink>
            <NavLink
              to="/dashboard/addusers"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg transition-colors ${isActive ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-teal-50"
                }`
              }
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
              Agregar Vendedor
            </NavLink>
            <NavLink
              to="/dashboard/addcity"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg transition-colors ${isActive ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-teal-50"
                }`
              }
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
              Ag Departamentos
            </NavLink>
            <NavLink
              to="/dashboard/signup"
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg transition-colors ${isActive ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-teal-50"
                }`
              }
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
              Alta User
            </NavLink>
          </nav>
        </div>
        <button onClick={handleLogout} className="bg-red-500 text-white flex justify-self-center px-4 py-2 rounded">
        Cerrar sesión
      </button>
      </aside>
      <main className="border flex-1 ml-56 p-8 bg-gray-50 min-h-screen">
        {/* Contenido principal aquí */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 bg-blue-500 text-white rounded"
        >
          {isSidebarOpen ? 'Cerrar' : 'Abrir'}
        </button>
      </main>
    </div>
  );
}

export default NavBar;