import React from 'react'
import { Link } from 'react-router-dom'
import data from '../../Data/products.json'
import Footer from '../Homepage/Footer';
import Navbar from '../Homepage/Navbar';

function Product_Listing() {
  return (
    <>
      <Navbar />
      <div>
        <section className="text-gray-600 body-font">
          <div className="flex flex-col gap-3 items-center mx-auto py-5 text-3xl">
            Seeds For Best Agriculture</div>
          <div className="container px-5 py-5 mx-auto">
            <div className="flex flex-wrap -m-4 ">
              {

                data.map((seed, idx) => {
                  return (
                    <div className="lg:w-1/5 md:w-1/2 p-4 w-full" key={idx}>
                      <Link to={`/product/${idx}`} className="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={seed.url} /></Link>
                      <div className="mt-4 ">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{seed.variety}</h3>
                        <div className="text-gray-900 title-font text-lg font-medium flex justify-between">
                          <span>{seed.name}</span>
                          <span className="ml-10">{seed.price}rs</span></div>
                      </div>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </>

  )
}

export default Product_Listing
