import './App.css';
import Main from './Components/Homepage/Main';
import ProductMain from './Components/Product/Main'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
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
    element: <Byfarmer/>
  },
  {
    path: '/seller',
    element: <BySeller/>
  },
  {
    path:'/product/:id',
    element:<ProductMain/>
  },
  {
    path:'/tracker',
    element:<Reminder/>
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
