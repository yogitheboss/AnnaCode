import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <header class="text-gray-600 flex body-font">
                <div class="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
                    <a class="flex title-font font-medium items-center  text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="" fill="none" >
                        </svg>
                        <Link to="/" class="ml-3 text-xl">AnnaCode</Link>
                    </a>
                    <nav class="md:ml-auto bg-green flex flex-wrap items-center text-base justify-center bg-green">
                        <Link to="/"  class="mr-5 hover:text-gray-900" id="#homepage">Home</Link>
                        <Link class="mr-5 hover:text-gray-900" to="/products">Products</Link>
                        <Link to="/" class="mr-5 hover:text-gray-900">Tracker</Link>
                        <Link to="/" class="mr-5 hover:text-gray-900">Feedback</Link>
                        <Link to="/" class="mr-5 hover:text-gray-900">About Us</Link>
                    </nav>
                </div>
            </header>

        </div>
    )
}

export default Navbar