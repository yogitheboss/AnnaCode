import React from 'react'
import { Link } from 'react-router-dom'
function Contact() {
  return (
    <section className="text-gray-600 body-font relative">
       <div class="flex flex-col items-center p-0 gap-3">
                <h1 class="text-slate-900 font-bold text-2xl">CONTACT US</h1>
                <h1 class="text-slate-900 font-bold ">To Contact check out the Geolocation facility in web.</h1>
                <p class="w-1/2 text-center text-gray-500">Contact US on the given address 
                </p>
          </div>
    <div className="container justify-center px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
      <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <iframe width="100%" height="100%" className="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"></iframe>
        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
          <div className="lg:w-1/2 px-6">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
            <p className="mt-1">Deccan chargers <br />Top Floor <br />pentagon square</p>
          </div>
          <div className="lg:w-1/2 h-64px px-6 mt-4 lg:mt-0">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
            <Link className="text-green-500 leading-relaxed">annacode@email.com</Link>
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">Toll-Free No:</h2>
            <p className="leading-relaxed">123-456-7890</p>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Contact