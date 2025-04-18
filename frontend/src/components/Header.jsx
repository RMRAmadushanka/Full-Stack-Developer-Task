import React from 'react'
import logo from '../assets/images/Cogent-logo.png'
const Header = () => {
    return (
        <header className="w-full bg-transparent py-4 px-6 absolute top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <img src={logo} alt="Cogent Solutions Logo" className="h-16 w-auto" />
                </div>
                <nav className="hidden sm:flex space-x-8 text-white text-lg font-light">
                    <a
                        href="#overview"
                        className="hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent"
                    >
                        Event Overview
                    </a>
                    <a
                        href="#agenda"
                        className="hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent"
                    >
                        Agenda
                    </a>
                </nav>
                <div>
                    <a
                        href="#register"
                        className="px-4 py-2 text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-lg font-medium hover:bg-pink-600 transition duration-300 hidden sm:block"
                    >
                        Register Now
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header