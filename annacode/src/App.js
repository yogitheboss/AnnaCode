import logo from './logo.svg';
import './App.css';
import Main from './Components/Homepage/Main';
import ProductListing from './Components/Products/ProductListing';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />
  },
  {
    path: '/products',
    element: <ProductListing />
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
