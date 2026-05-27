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
import ShoppingHome from './pages/shopping-view/home'
import ShoppingAccount from './pages/shopping-view/account'
import ShoppingCheckout from './pages/shopping-view/checkout'
import ShoppingListing from './pages/shopping-view/listing'
import CheckAuth from './components/common/check-auth'

function App() {

  const isAuthenticated = false;
  const user = null;

  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      <h1>Header component</h1>
        <Routes>
          <Route path='/auth' element={
            <CheckAuth isAuthenticated={isAuthenticated} user ={user} >
              <AuthLayout />
            </CheckAuth>
            }>

            <Route path='login' element={<AuthLogin />}/>
            <Route path='register' element={<AuthRegister />}/>
          </Route>
          <Route path='/admin' element={
            <CheckAuth isAuthenticated={isAuthenticated} user ={user} >
              <AdminLayout/>
            </CheckAuth>
            }>
            <Route path='dashboard' element={<AdminDashboard />}/>
            <Route path='products' element={<AdminProduct />}/>
            <Route path='order' element={<AdminOrder />}/>
            <Route path='feature' element={<Adminfeatures />}/>
          </Route>
          <Route path='/shop' element={
            <CheckAuth isAuthenticated={isAuthenticated} user ={user} >
              <ShoppingLayout />
            </CheckAuth>
            }>
            <Route path='home' element={<ShoppingHome />} />
            <Route path='account' element={<ShoppingAccount />}/>
            <Route path='list' element={<ShoppingListing />}/>
            <Route path='checkout' element={<ShoppingCheckout />}/>
          </Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>

    </div>
  )
}

export default App
