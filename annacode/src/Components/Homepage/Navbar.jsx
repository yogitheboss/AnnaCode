import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <header className="text-gray-700 body-font p-2 ">
                <div className="container mx-auto flex flex-wrap p-0 flex-col md:flex-row items-center">
                    <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src="./logo.png" alt="" className="w-10 rounded-full"/>
                        <span className="ml-3 text-xl"> <b>अन्न CODE</b></span>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center cursor-pointer bg-green">
                        <Link  to="/" className="mr-5 hover:text-gray-900">Home</Link>
                        <Link   to="/products" className="mr-5 hover:text-gray-900">Products</Link>
                        <Link  to="/tracker" className="mr-5 hover:text-gray-900">Tracker</Link>
                        
                        <Link  to="/" className="mr-5 hover:text-gray-900">About Us</Link>
                    </nav>
                    <button
                        className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none bg-green hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Feedback
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </div>
    )
}

export default Navbar