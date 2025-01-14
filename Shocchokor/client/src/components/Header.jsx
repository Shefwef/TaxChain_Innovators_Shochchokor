import { Link } from "react-router-dom";


export default function Header() {
  

  return (
    <header className="pl-10 pr-10 bg-cream text-white "
    style={{ backgroundColor: "#f8f1d1" }}>
      <div className="container mx-auto px-4 flex justify-between items-center py-3">
        <div className="flex items-center">
          <Link to="/home">
            <img src="/Logo.png" width={140} height={100}/>
          </Link>
        </div>

        <nav className="hidden md:flex space-x-12 ">
          <div className="relative group pt-1">
            <button className="font-bold text-teal-800 hover:text-gray-400 transition duration-300">
              Services
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded mt-2">
              <Link
                to="/service1"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Service 1
              </Link>
              <Link
                to="/service2"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Service 2
              </Link>
              <Link
                to="/service3"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Service 3
              </Link>
            </div>
          </div>

          <Link
            to="/about"
            className="font-bold text-teal-800 hover:text-gray-800 transition duration-300 pt-1"
          >
            About
          </Link>

          <Link
            to="/community"
            className="font-bold text-teal-800 hover:text-gray-800 transition duration-300 pt-1"
          >
            Community
          </Link>

          <Link
            to="/profile"
            className="flex items-center space-x-2 font-bold"
          >
            
          </Link>
        </nav>

        <div className="md:hidden">
          <button className="text-gray-300 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}