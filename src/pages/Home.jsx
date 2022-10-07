import React from 'react'
import UserResult from '../components/user/UserResult'
import UserSearch from "../components/user/UserSearch"

function Home() {
  return (
    <div>
    <UserSearch />
    <UserResult />
    </div>
  )
}

export default Home