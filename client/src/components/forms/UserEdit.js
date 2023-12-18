import { useState, useContext } from 'react'
import { Form, Message } from 'semantic-ui-react'
import { UserContext } from '../context/UserProvider'

function UserEdit() {
    const { user, setUser, navigate } = useContext(UserContext)
    const [errors, setErrors] = useState([])
    const [userBody, setUserBody] = useState(user.user.userable_type == "Company" ? 
        {
            name: user.name,
            industry: user.industry,
            image_url: user.image_url
        } : {
            name: user.name,
            market: user.market,
            image_url: user.image_url
        })

    const userOptions = user.user.userable_type == "Company" ? (
        <Form.Input
          label='Industry'
          name='industry'
          value={userBody.industry}
          onChange={handleChange}
        />
    ) : (
        <Form.Input
          label='Market'
          name='market'
          value={userBody.market}
          onChange={handleChange}
        />
    )
  
    function handleChange(e) {
      setUserBody({...userBody, [e.target.name]: e.target.value})
    }
  
    function handleSubmit(e) {
      e.preventDefault()
      fetch(`/users/${user.user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userBody),
      })
      .then((response) => {
        if (response.ok) {
          response.json()
            .then((data) => {
                navigate(`/my_profile`)
                setUser(data)
              })
        } else {
          response.json().then((data) => setErrors(data.errors))
        }
      })
    }
  
    return (
      <Form onSubmit={handleSubmit} className='Form'>
        <Form.Input
          label='Name'
          name='name'
          value={userBody.name}
          onChange={handleChange}
        />
        { userOptions }
        <Form.Input 
          label='Image Url'
          name='image_url'
          value={userBody.image_url}
          onChange={handleChange}
        />
        <Form.Button content='Submit' />
        <Message hidden={ errors.length > 0 ? false : true } list={ errors } />
      </Form>
    )

}

export default UserEdit