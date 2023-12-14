import { useContext } from 'react'
import { Link } from "react-router-dom"
import { Menu } from "semantic-ui-react"
import { UserContext } from './context/UserProvider'

function NavBar() {
  const { user, setUser } = useContext(UserContext)

  function handleLogoutClick() {
    fetch("/logout", 
    { 
      method: "DELETE" 
    })
      .then((response) => {
        if (response.ok) {
          setUser(null)
        }
      })
  }

    const userOptions = user.user.userable_type == "Company" ? (
            <Menu.Item
                name='new ad'
                as={Link}
                to='/ads/new'
            /> 
        ) : ( null )
    
  

  return (
    <Menu secondary>
      <Menu.Item
        name='home'
        as={Link}
        to='/'
      />
      <Menu.Item
        name='my profile'
        as={Link}
        to='/my_profile'
      />
      { userOptions }
      <Menu.Menu position='right'>
        <Menu.Item 
          name='logout'
          onClick={handleLogoutClick}
        />
      </Menu.Menu>
    </Menu>
  )
}

export default NavBar
