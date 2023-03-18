import logo from './logo.svg';
import './App.css';
import Main from './Components/Homepage/Main';
import Product_Listing from './Components/Products/Product_Listing';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path : './',
    element: <Main/>
  },
  {
    path : './products',
    element: <Product_Listing/>
  }
])
function App() {
  return (
    <>
    {/* <Main/> */}
    <Product_Listing/>
    </>
  );
}

export default App;
