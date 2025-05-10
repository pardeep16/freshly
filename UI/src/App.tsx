import './App.css'
import Layout from './components/Layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import Restaurants from './pages/Restaurants/Restaurants'
import RestaurantMenu from './pages/RestaurantMenu/RestaurantMenu'
import Checkout from './pages/Checkout/Checkout'
import OrderTracking from './pages/OrderTracking/OrderTracking'
import RightSideBar from './components/Layout/RightSideBar'

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path='/restaurants' element={<Restaurants />}/>
          <Route  path='/restaurants/:id' element={<RestaurantMenu />}/>
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/order-track/:orderId' element={<OrderTracking />} />
          <Route path='/cart' element={<RightSideBar />} />
      </Routes>
    </Layout>
    </BrowserRouter>
  )
}

export default App
