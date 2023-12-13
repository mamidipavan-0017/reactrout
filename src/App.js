import React, {lazy} from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
//import About from './components/About'
import Navbar from './components/Navbar'
import { AuthProvider } from './components/Auth'
import OrderSummary from './components/OrderSummary'
import NoMatch from './components/NoMatch'
import Products from './components/Products'
import FeaturedProducts from './components/FeaturedProducts'
import NewProducts from './components/NewProducts'
import Users from './components/Users'
import UserDetails from './components/UserDetails'
import Admin from './components/Admin'
import Profile from './components/Profile'
import Login from './components/Login'
import RequiredAuth from './components/RequiredAuth'
const LazyAbout = React.lazy(() => import('./components/About'))

function App() {
  return (
    <AuthProvider>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='about' element={<React.Suspense fallback='loading...'><LazyAbout /></React.Suspense>}/>
      <Route path='order-summary' element= {<OrderSummary />}/>
      <Route path='products' element= {<Products />}>
        <Route path='featured' element={<FeaturedProducts />} />
        <Route path='new' element={<NewProducts />} />
      </Route>
      <Route path='users' element={<Users />} >
        <Route path=':id' element={<UserDetails />} />
        <Route path='admin' element={<Admin />} />
      </Route>
      <Route path='profile' element={<RequiredAuth><Profile /></RequiredAuth>} />
      <Route path='login' element={<Login />} />
      <Route path='*' element={<NoMatch />} />
    </Routes>
    </AuthProvider>
  )
}

export default App