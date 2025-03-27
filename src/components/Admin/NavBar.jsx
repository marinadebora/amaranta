import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Cierra el menú si se hace clic fuera
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-800 text-white flex items-center justify-between px-6 h-14 relative ">
      <div></div>
      {/* Logo */}
      <div className="text-xl font-bold">Logo</div>

      {/* Menú desplegable */}
      <div className=" top-0" ref={menuRef}>
        <button
          className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}>
          Menú {isOpen ? <X size={16} /> : <Menu size={16} />}
        </button>

        {/* Dropdown flotante sin mover el botón */}
        {isOpen && (
        <div className="border">
          <button
          className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}>
          Menú {isOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
          <div className=" fixed top-0 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white w-48 p-2 rounded-lg shadow-lg z-500">
            <ul className="space-y-2 ">
              <li className="py-2 px-4 hover:bg-gray-600 rounded cursor-pointer">Opción 1</li>
              <li className="py-2 px-4 hover:bg-gray-600 rounded cursor-pointer">Opción 2</li>
              <li className="py-2 px-4 hover:bg-gray-600 rounded cursor-pointer">Opción 3</li>
            </ul>
          </div>
          </div>
        )}
      </div>

      {/* Botones */}
      <div className="flex gap-4">
        <button className="bg-blue-600 px-4 py-2 rounded-lg">Botón 1</button>
        <button className="bg-green-600 px-4 py-2 rounded-lg">Botón 2</button>
      </div>

      {/* Logout */}
      <button className="bg-red-600 px-4 py-2 rounded-lg">Logout</button>
    </nav>
  );
}