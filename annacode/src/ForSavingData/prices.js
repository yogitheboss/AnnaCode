import React from 'react'
import { db } from '../../src/firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';

function Prices() {


    const addPrice = async () => {
        const docRef = await addDoc(collection(db, "prices"), {
            name: "Apple",
            price: 1.99
        });
        console.log("Document written with ID: ", docRef.id);
    }

  return  (
    <div className='text-center'>

        <button className="bg-blue-800" onClick={addPrice}>CLick to add</button>
    </div>
  )
}

export default Prices