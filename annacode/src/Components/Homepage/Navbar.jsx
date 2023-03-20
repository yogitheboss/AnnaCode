import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
    return (
        <div>
            <header className="text-gray-700 body-font p-2 bg-green-700 text-white font-bold ">
                <div className="container mx-auto flex flex-wrap p-0 flex-col md:flex-row items-center px-20    ">
                    <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src="./logo.png" alt="" className="w-10 rounded-full"/>
                        <span className="ml-3 text-xl text-white"> <b>अन्न CODE</b></span>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center cursor-pointer ">
                        <Link  to="/" className="mr-5 hover:text-gray-900">Home</Link>
                        <div className="dropdown">
                            <button className="dropbtn mr-5 hover:text-gray-900 ">Products
                                <i className="fa fa-caret-down"></i>
                            </button>
                            <div className="dropdown-content">
                                <Link to="/farmer">By Farmer</Link>
                                <Link to="/seller">By Seller</Link>
                                
                            </div>
                        </div>
                       
                        
                        <Link  to="/tracker" className="mr-5 hover:text-gray-900">Tracker</Link>
                        
                        <Link  to="/about" className="mr-5 hover:text-gray-900">About Us</Link>
                    </nav>
                    <button 
                        className="inline-flex items-center bg-white text-green-900 font-bold border-0 py-1 px-3 focus:outline-none bg-green hover:bg-gray-200 rounded  mt-4 md:mt-0">
                            <a target='_blank' rel="noreferrer" href="https://forms.gle/5QHJPTKr7kzJgx9j7">
                               <Link to='/feedback'>Feedback</Link> 
                            </a>
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