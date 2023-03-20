import React from 'react'
import { Link } from 'react-router-dom'
import data from '../../Data/products.json'
import Footer from '../Homepage/Footer';
import Navbar from '../Homepage/Navbar';

function BySeller() {
  return (
    <>
      <Navbar />
      <div>
        <section className="text-gray-600 body-font py-5">
          <div className="flex flex-col gap-3 items-center mx-auto py-5 text-3xl">
            Hybrid Seeds for Agriculture for farmers</div>
          <div className="container px-5 py-5 mx-auto">
            <div className="flex flex-wrap -m-4 ">
              {
                data.map((seed, idx) => {
                  let preprofit=seed.data[1].cost.preprofit
                  return (
                    <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-2xl py-5 px-5" key={idx}>
                      <Link to={`/product/${idx}`} state={{ seed: seed }}
                        className="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={seed.url} /></Link>
                      <div className="mt-4 ">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{seed.variety}</h3>
                        <div className="text-gray-900 title-font text-lg font-medium flex justify-between">
                          <span>{seed.name}</span>
                          <span className="ml-10">{seed.price}rs</span></div>
                      </div>
                      <div className="text-gray-900 title-font text-green-800 text-lg font-bold font-medium flex justify-between">
                          <span>Preprofit</span>
                          <span className="ml-10">{preprofit}rs</span></div>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>

  )
}

export default BySeller
