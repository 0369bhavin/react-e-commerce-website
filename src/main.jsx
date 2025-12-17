import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

import Home from './components/Home.jsx'
import Products from './components/Products.jsx'
import Singleproduct from'./components/Singleproduct.jsx'
import Payment from "./components/Payment.jsx";
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',      // default route
        element: <Home />
      },
      {
        path: 'products',   
        element: <Products />
      },
      {
        path:'products/:id',
        element:<Singleproduct/>
      },
      {
  path: "Payment/:id",
  element: <Payment />
}

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

 

