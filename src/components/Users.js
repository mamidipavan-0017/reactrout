import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

function Users() {
    const [searchParams, setSearchParams] = useSearchParams()
    const showActiveUers = searchParams.get('filter') === 'active'
  return (
    <div>
            <h4>User 1</h4>
            <h4>User 2</h4>
            <h4>User 3</h4>
            <Outlet />
        <div>
            <button onClick={() => setSearchParams({filter:'active'})}>Active Users</button>
            <button onClick={() => setSearchParams({})}>Reset Filter</button>
        </div>
    </div>
    
  )
}

export default Users