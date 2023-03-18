import React from 'react'

function Navbar() {
    return (
        <div>
            <header class="text-gray-600 flex body-font">
                <div class="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
                    <a class="flex title-font font-medium items-center  text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="" fill="none" >
                        </svg>
                        <span class="ml-3 text-xl">AnnaCode</span>
                    </a>
                    <nav class="md:ml-auto bg-green flex flex-wrap items-center text-base justify-center bg-green">
                        <a class="mr-5 hover:text-gray-900" id="#homepage">Home</a>
                        <a class="mr-5 hover:text-gray-900" href="Productcards.html">Products</a>
                        <a class="mr-5 hover:text-gray-900">Tracker</a>
                        <a class="mr-5 hover:text-gray-900">Feedback</a>
                        <a class="mr-5 hover:text-gray-900">About Us</a>
                    </nav>
                </div>
            </header>

        </div>
    )
}

export default Navbar