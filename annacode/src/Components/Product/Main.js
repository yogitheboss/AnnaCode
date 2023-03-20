import React from 'react'
import Navbar from '../Homepage/Navbar'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import data from '../../Data/products.json'
import PieGraph from '../Graph/PieGraph'
import LineGraph from '../Graph/LineGraph'
function Main(props) {
    const location = useLocation()
    const index = location.pathname.split('/')[2];
    const seeddata=data[index];
    const info=seeddata.data
    return (
        <>
            <Navbar />
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                            src={seeddata.url} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">{seeddata.variety}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{seeddata.name}</h1>
                            <div className="flex mb-4">
                            </div>
                            <p className="leading-relaxed">{seeddata.info}</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="flex justify-center items-center">
                <table className="table-auto display-inline justify-center">
                    <thead>
                        <tr>
                            <th>Song</th>
                            <th>Artist</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>The Sliding Mr. Bones</td>
                            <td>Malcolm Lockyer</td>
                            <td>1961</td>
                        </tr>
                        <tr>
                            <td>Witchy Woman</td>
                            <td>The Eagles</td>
                            <td>1972</td>
                        </tr>
                        <tr>
                            <td>Shining Star</td>
                            <td>Earth, Wind, and Fire</td>
                            <td>1975</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                               <PieGraph file={{info}}/>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <LineGraph/>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <PieGraph/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <Link className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round"
                            strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                            viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">AnnaCode</span>
                    </Link>
                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">©
                        AnnaCode —
                        <Link href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer"
                            target="_blank">@Deccan Chargers</Link>
                    </p>
                </div>
            </footer>


        </>

    )

}

export default Main