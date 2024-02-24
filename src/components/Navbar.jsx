import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
            <p className="blue-gradient_text">RM</p>
        </NavLink>

        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                <div className="bg-white py-1 px-3 rounded-full shadow-md hover:shadow-blue-500 animation-color duration-300">
                    <p className="hover:blue-gradient_text">About</p>
                </div>
            </NavLink>

            <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                <div className="bg-white py-1 px-3 rounded-full shadow-md hover:shadow-blue-500 animation-color duration-300">
                    <p className="hover:blue-gradient_text">Projects</p>
                </div>
            </NavLink>
        </nav>

    </header>
  )
}

export default Navbar