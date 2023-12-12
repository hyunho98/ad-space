import { useState, useContext } from "react"
import { Form, Message } from "semantic-ui-react"
import { UserContext } from '.../context/UserProvider'

function LoginForm() {
  const { setUser, navigate } = useContext(UserContext)
  const [errors, setErrors] = useState([])
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: ""
  })

  function handleChange(e) {
    setLoginForm({...loginForm, [e.target.name]: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginForm),
    })
    .then((response) => {
      if (response.ok) {
        response.json()
          .then((data) => {
              setUser(data)
              navigate('/')
            })
      } else {
        response.json().then((data) => setErrors(data.errors))
      }
    })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Input
        label='Username'
        name='username'
        value={loginForm.username}
        onChange={handleChange}
      />
      <Form.Input 
        label='Password'
        name='password'
        type='password'
        value={loginForm.password}
        onChange={handleChange}
      />
      <Form.Button content='Login' />
      <Message hidden={ errors.length > 0 ? false : true } list={ errors } />
    </Form>
  )
}

export default LoginForm
