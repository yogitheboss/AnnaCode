import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <div>
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
                        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">About Us</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link className="text-gray-600 hover:text-gray-800">Home</Link>
                                </li>
                                <li>
                                    <Link className="text-gray-600 hover:text-gray-800">Seller Contact</Link>
                                </li>
                                <li>
                                    <Link className="text-gray-600 hover:text-gray-800">Development Team</Link>
                                </li>
                                
                            </nav>
                        </div>
                        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Resources</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link className="text-gray-600 hover:text-gray-800">GOI</Link>
                                </li>
                                <li>
                                    <Link className="text-gray-600 hover:text-gray-800">ICAR</Link>
                                </li>
                            </nav>
                        </div>
                        
                        
                    </div>
                </div>
                <div className="bg-gray-100">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-500 text-sm text-center sm:text-left">© 2023 AnnaCode —
                            <Link href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">@annacode</Link>
                        </p>
                        <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">Contact AnnaCode</span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer