import React from 'react'
import Footer from '../Homepage/Footer'
import Navbar from '../Homepage/Navbar'
function About() {
    return (
        <div>
            <Navbar />
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">अन्नCode
                        </h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">An farmer centric initiative that equips farmer with all the necessary information about seeds and best farming practices. After scanning the QR available in the seed label information of following will be present on seed packs:
                        </p>
                    </div>
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 lg:w-1/4 md:w-1/2">
                            <div class="h-full flex flex-col items-center text-center">
                                <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                                    src="https://as2.ftcdn.net/v2/jpg/01/43/15/31/1000_F_143153184_Kl2xRipznzv0bhSODE4lF4vCH8ZiS6Hd.jpg" />
                                <div class="w-full">
                                    <h2 class="title-font font-medium text-lg text-gray-900">QR-Code</h2>
                                    <p class="mb-4">Farmers can scan QR-Codes to get the necessary data about the seeds.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/4 md:w-1/2">
                            <div class="h-full flex flex-col items-center text-center">
                                <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                                    src="https://thumbs.dreamstime.com/b/indian-farmer-using-mobile-phone-corn-field-indian-farmer-using-mobile-phone-corn-field-139751587.jpg" />
                                <div class="w-full">
                                    <h2 class="title-font font-medium text-lg text-gray-900">Text-to-Speech</h2>
                                    <p class="mb-4">Information about the seeds are provided in the native language of the
                                        farmer.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/4 md:w-1/2">
                            <div class="h-full flex flex-col items-center text-center">
                                <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                                    src="https://www.barkerbrettell.co.uk/content/uploads/2018/02/Agriculture-technology-790x400.jpg" />
                                <div class="w-full">
                                    <h2 class="title-font font-medium text-lg text-gray-900">Feedback</h2>
                                    <p class="mb-4">Farmer after using the website can give their review which will be further used for improvement in information.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/4 md:w-1/2">
                            <div class="h-full flex flex-col items-center text-center">
                                <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                                    src="https://i0.wp.com/www.ictworks.org/wp-content/uploads/2016/05/AwaazDe_Farmers_UGC.png?w=640&ssl=1" />
                                <div class="w-full">
                                    <h2 class="title-font font-medium text-lg text-gray-900">Information</h2>
                                    <p class="mb-4">Information is avoilable related with pre-profit in terms of visual objects.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default About