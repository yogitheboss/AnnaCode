import React from 'react'

function Hero() {
    return (
        <div>
            <section className="px-10 text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900"><b>Welcome,Dear farmer!</b>
                            <br className="hidden lg:inline-block text-xl" />It's a pleasure to have you here.
                        </h1>
                        <p className="mb-8 leading-relaxed">We recognize the challenges that come with farming, such as unpredictable weather, pests, and market fluctuations. However, your perseverance and commitment to your craft are truly admirable.</p>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src="https://upload.wikimedia.org/wikipedia/commons/4/41/India_Farming.jpg" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero