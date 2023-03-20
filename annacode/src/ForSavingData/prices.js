import React from 'react'
import { db } from '../../firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import data from '../Data/product_details_graph.json'
function prices() {
    // console.log(data);
  return (
    <div>prices</div>
  )
}

export default prices