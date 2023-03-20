import React from 'react'
import Navbar from '../Homepage/Navbar'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import data from '../../Data/products.json'
import {
    Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale,
    LinearScale,
    BarElement,
    Title
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
function Main() {
    
    ChartJS.register(ArcElement, Tooltip, Legend);
    const location = useLocation()
    const index = location.pathname.split('/')[2];
    const seeddata = data[index];
    const label_datakeys = Object.keys(seeddata.data[1].cost);
    const label_datavalues = Object.values(seeddata.data[1].cost);
    const nameNutrients = Object.keys(seeddata.nutrients)
    const nameNutrientsValues = Object.values(seeddata.nutrients)
    function run(){
        window.responsiveVoice.speak(seeddata.hindiinfo,"Hindi Male");
    }
    const chart_data = {
        labels: label_datakeys,
        datasets: [
            {
                label: 'preprofit',
                data: label_datavalues,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    const bar_chart_data = {
        labels: label_datakeys,
        datasets: [
            {
                label: 'preprofit',
                data: label_datavalues,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart',
            },
        },
    };
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
                            <div className="flex mt-10">
                            <p className="leading-relaxed">{seeddata.info}</p>
                            </div>
                            <button onClick={run} className='p-4 bg-green-700 text-white rounded-lg mt-10'>Speak</button>

                        </div>
                    </div>
                </div>
            </section>
            <div className="flex justify-center items-center">
                <table className="table-auto display-inline justify-center">
                    <thead>
                        <tr>
                            <th>Nutrients</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{nameNutrients[0]}</td>
                            <td>{nameNutrientsValues[0]}</td>
                        </tr>
                        <tr>
                            <td>{nameNutrients[1]}</td>
                            <td>{nameNutrientsValues[1]}</td>
                        </tr>
                        <tr>
                            <td>{nameNutrients[2]}</td>
                            <td>{nameNutrientsValues[2]}</td>
                        </tr>
                        <tr>
                            <td>{nameNutrients[3]}</td>
                            <td>{nameNutrientsValues[3]}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-12 mx-auto">
                    <div className="flex justify-around">
                        <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
                            <div className=" h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <Pie data={chart_data} />
                            </div>
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <Bar options={options} data={bar_chart_data} />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        <div>
            <footer className="text-gray-600 body-font bg-green-700 text-white font-bold">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
                        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3"><b>About Us</b></h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link className="text-white hover:text-gray-100">Home</Link>
                                </li>
                                <li>
                                    <Link className="text-white hover:text-gray-100">Seller Contact</Link>
                                </li>
                                
                            </nav>
                        </div>
                        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3"><b> Resources </b></h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link className="text-white hover:text-gray-800">GOI</Link>
                                </li>
                                <li>
                                    <Link className="text-white hover:text-gray-800">ICAR</Link>
                                </li>
                                <li>
                                    <Link className="text-white hover:text-gray-800">Chat Gpt</Link>
                                </li>
                                <li>
                                    <Link className="text-white hover:text-gray-800">Ministry of Agriculture</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3"><b> Development Team </b></h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link className="text-white hover:text-gray-800">Deccan Chargers</Link>
                                </li>
                                
                            </nav>
                        </div>
                        
                    </div>
                </div>
                <div className='w-full h=.5 bg-white'>
                </div>
                <div className="bg-green-900">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-white text-sm text-center sm:text-left">© 2023 AnnaCode —
                            <Link href="https://twitter.com/knyttneve" className="text-white ml-1" target="_blank" rel="noopener noreferrer">@annacode</Link>
                        </p>
                        <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-white text-sm">Contact AnnaCode</span>
                    </div>
                </div>
            </footer>
        </div>
        </>

    )

}

export default Main