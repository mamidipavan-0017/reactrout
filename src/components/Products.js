import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
  return (
    <>
        <div>
            <input type='search' placeholder='Search products' />
        </div>
        <nav>
            {/* relative links */}
            <Link to='featured'>Featured</Link> 
            <Link to='new'>New</Link>           
        </nav>
        <Outlet />
    </>
  )
}

export default Products