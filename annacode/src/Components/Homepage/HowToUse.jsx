import React from 'react'
import { Link } from 'react-router-dom'
function HowToUse() {
    return (
        <div>
            <div className="py-30">
                <div className="flex flex-col items-center gap-3">
                    <h1 className="text-slate-900 font-bold text-2xl ">How to Use</h1>
                    <p className="w-1/2 text-center text-gray-600">अन्न CODE can be used to determine the seed Digital labeling of Seeds of different varieties.
                    </p>
                </div>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-12 mx-auto flex flex-wrap">
                        <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                            </div>
                            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-500 text-white relative z-10 title-font font-medium text-sm">1</div>
                            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                <div className="flex-shrink-0 w-24 h-24 bg-green-100 text-green-500 rounded-full inline-flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="4git2" height="42" fill="currentColor" className="bi bi-qr-code" viewBox="0 0 16 16"> <path d="M2 2h2v2H2V2Z" /> <path d="M6 0v6H0V0h6ZM5 1H1v4h4V1ZM4 12H2v2h2v-2Z" /> <path d="M6 10v6H0v-6h6Zm-5 1v4h4v-4H1Zm11-9h2v2h-2V2Z" /> <path d="M10 0v6h6V0h-6Zm5 1v4h-4V1h4ZM8 1V0h1v2H8v2H7V1h1Zm0 5V4h1v2H8ZM6 8V7h1V6h1v2h1V7h5v1h-4v1H7V8H6Zm0 0v1H2V8H1v1H0V7h3v1h3Zm10 1h-1V7h1v2Zm-1 0h-1v2h2v-1h-1V9Zm-4 0h2v1h-1v1h-1V9Zm2 3v-1h-1v1h-1v1H9v1h3v-2h1Zm0 0h3v1h-2v1h-1v-2Zm-4-1v1h1v-2H7v1h2Z" /> <path d="M7 12h1v3h4v1H7v-4Zm9 2v2h-3v-1h2v-1h1Z" /> </svg>

                                </div>
                                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                    <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Scan the QR Code</h2>
                                    <p className="leading-relaxed">Scan the QR code printed on your seed pack and Know your Seed Details.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                            </div>
                            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-500 text-white relative z-10 title-font font-medium text-sm">2</div>
                            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                <div className="flex-shrink-0 w-24 h-24 bg-green-100 text-green-500 rounded-full inline-flex items-center justify-center">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                    <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Visit to Website</h2>
                                    <p className="leading-relaxed">Here you will get the major details of Seeds including Varieties, Yield information, </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                            </div>
                            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-500 text-white relative z-10 title-font font-medium text-sm">3</div>
                            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                <div className="flex-shrink-0 w-24 h-24 bg-green-100 text-green-500 rounded-full inline-flex items-center justify-center">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
                                        <circle cx="12" cy="5" r="3"></circle>
                                        <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                    <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Set Reminder for Crops</h2>
                                    <p className="leading-relaxed">Set Reminders of Nutrients & fertilisers, insecticides & pesticide at specific time of interval for better yirld. </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
                            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                            </div>
                            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-500 text-white relative z-10 title-font font-medium text-sm">4</div>
                            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                <div className="flex-shrink-0 w-24 h-24 bg-green-100 text-green-500 rounded-full inline-flex items-center justify-center">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                    <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Feedback</h2>
                                    <p className="leading-relaxed">Here farmer could provide thier valuable feedback of Production of seed.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="flex flex-col items-center gap-3">
                    <h1 className="text-slate-900 font-bold text-2xl ">How We Can Help</h1>
                </div>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-12 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                            <img alt="feature" className="object-cover object-center h-fit w-full" src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/agriculture_20210913_1643808325.jpg" />
                        </div>
                        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                            <div className="flex flex-col mb-10 lg:items-start items-center">
                                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Record Keeping</h2>
                                    <p className="leading-relaxed text-base">With अन्न CODE your spray, employee, harvest, irrigation, and other production practice records are only a few clicks or taps away - whenever and wherever you need them.</p>
                                    <Link to='/tracker' className="mt-3 text-green-500 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex relative pb-20 sm:items-center md:w-full mx-10 px-5">

                        <div className="flex flex-col  mb-10 lg:items-start items-center">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <circle cx="6" cy="6" r="3"></circle>
                                    <circle cx="6" cy="18" r="3"></circle>
                                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                </svg>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Scheduling</h2>
                                <p className="pr-10 leading-relaxed text-base">Keep your farm on track and avoid forgotten or duplicated tasks.  Create your own schedules quickly and easily or choose from thousands of schedule templates.</p>
                                <Link to="/tracker" className="mt-3 text-green-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className=" flex flex-col mb-10 lg:items-start items-center">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Analytics & Reports</h2>
                                <p className="leading-relaxed text-base pr-10">अन्न CODE makes tracking your farm's progress a snap and can shave days off the auditing process.  Let us handle the paperwork so you can get back to your farm.</p>
                                <Link to="/tracker" className="mt-3 text-green-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>

                </section>

            </div>
        </div>
    )
}

export default HowToUse
