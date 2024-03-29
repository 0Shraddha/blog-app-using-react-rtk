import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'
const Users = () => {

  const [searchParams, setSearchParams] = useSearchParams()
  const showActiveUsers = searchParams.get('filter') === 'active';
  return (
    <div>
        <h3>User1</h3>
        <h3>User2</h3>
        <h3>User3</h3>
        <h3>User4</h3>
<Outlet/>
<div>
  <button onClick={()=> setSearchParams({ filter : 'active'})}>Active Users</button>
  <button onClick={() => setSearchParams({})}>Reset Filters</button>
</div>
{showActiveUsers ? <h2>Showing Active Users</h2> : <h2>Showing all users</h2>}
    </div>
  )
}

export default Users