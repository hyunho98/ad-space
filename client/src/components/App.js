import './App.css'
import { UserContext } from '../context/UserProvider'
import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'

function App() {
  const { user } = useContext(UserContext)

  if (!user) return <Login/>

  return (
    <div>
      <NavBar />
      <main>
        <Routes>
        </Routes>
      </main>
    </div>
  )
}

export default App;
