import './App.css';
import Main from './Components/Homepage/Main';
import ProductMain from './Components/Product/Main'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { Link } from 'react-router-dom';
import Reminder from './Components/Reminder/Reminder';
import BySeller from './Components/Products/BySeller';
import Byfarmer from './Components/Products/Byfarmer';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />
  },
  {
    path: '/farmer',
    element: <Byfarmer />
  },
  {
    path: '/seller',
    element: <BySeller />
  },
  {
    path: '/product/:id',
    element: <ProductMain />
  },
  {
    path: '/tracker',
    element: <Reminder />
  },
  {
    path: '/feedback',
    element: (<>

      <div className='flex flex-col  justify-center items-center h-screen text-4xl'>
        <p className='m-2'>
          Thanks for your feedback 🧡, we would try to improve it further
        </p>
        <button className='bg-green-400 p-2 rounded-lg mt-20'><Link  to="/"> Homepage</Link></button>        
      </div>
    </>)
  }
])
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
