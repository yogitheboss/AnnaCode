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
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex justify-around">
                        <div className="grid grid-cols-2 gap-5">
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