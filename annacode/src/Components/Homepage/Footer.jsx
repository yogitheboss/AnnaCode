import React from 'react'

function Footer() {
    return (
        <div>
            <footer class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
                        <div class="lg:w-1/6 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">About Us</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Home</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Seller Contact</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Development Team</a>
                                </li>
                                
                            </nav>
                        </div>
                        <div class="lg:w-1/6 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Resources</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">GOI</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">ICAR</a>
                                </li>
                            </nav>
                        </div>
                        
                        
                    </div>
                </div>
                <div class="bg-gray-100">
                    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p class="text-gray-500 text-sm text-center sm:text-left">© 2023 AnnaCode —
                            <a href="https://twitter.com/knyttneve" class="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">@annacode</a>
                        </p>
                        <span class="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">Contact AnnaCode</span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer