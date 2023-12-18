import '../App.css'
import { UserContext } from './context/UserProvider'
import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import NavBar from './NavBar'
import AdList from '../pages/AdList'
import NewAd from '../pages/NewAd'
import EditAd from '../pages/EditAd'
import ViewAd from '../pages/ViewAd'
import ViewProfile from '../pages/ViewProfile'


function App() {
  const { user } = useContext(UserContext)

  if (!user) return <Login/>

  return (
    <div>
      <NavBar />
      <main>
        <Routes>
          <Route 
            path='/ads/new'
            element={<NewAd />}
          />
          <Route 
            path='/ads/edit/:id'
            element={<EditAd />}
          />
          <Route
            path='/ads/:id'
            element={<ViewAd />}
          />
          <Route
            path='/my_profile'
            element={<ViewProfile />}
          />
          <Route
            path="/"
            element={<AdList />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
