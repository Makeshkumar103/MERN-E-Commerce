// import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './components/auth/layout'
import AuthLogin from './pages/auth/login'
import AuthRegister from './pages/auth/register'
import AdminLayout from './components/admin-view/layout'
import AdminDashboard from './pages/admin-view/dashboard'
import Adminfeatures from './pages/admin-view/features'
import AdminOrder from './pages/admin-view/order'
import AdminProduct from './pages/admin-view/products'
import ShoppingLayout from './components/shopping-view/layout'
import NotFound from './pages/notfound'

function App() {

  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      <h1>Header component</h1>
        <Routes>
          <Route path='/auth' element={<AuthLayout/>}>
            <Route path='login' element={<AuthLogin />}/>
            <Route path='register' element={<AuthRegister />}/>
          </Route>
          <Route path='/admin' element={<AdminLayout/>}>
            <Route path='dashboard' element={<AdminDashboard />}/>
            <Route path='products' element={<AdminProduct />}/>
            <Route path='order' element={<AdminOrder />}/>
            <Route path='feature' element={<Adminfeatures />}/>
          </Route>
          <Route path='/shopping' element={<ShoppingLayout />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>

    </div>
  )
}

export default App
