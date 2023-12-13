import { useState, useContext } from "react"
import { Form, Message } from 'semantic-ui-react'
import { UserContext } from '../context/UserProvider'

function AgencySignup() {
    const { setUser, navigate } = useContext(UserContext)
    const [errors, setErrors] = useState([])
    const [signupBody, setSignupBody] = useState({
        username: "",
        password: "",
        password_confirmation: "",
        name: "",
        market: "",
        image_url: ""
    })

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(signupBody)
        })
        .then((response) => {
        if (response.ok) {
            response.json()
            .then((data) => {
                setUser(data)
                navigate('/')
            })
        } else {
            response.json()
            .then((data) => setErrors(data.errors))
        }
        })
    }

    function handleChange(e) {
        setSignupBody({...signupBody, [e.target.name]: e.target.value})
    }

    return (
        <Form onSubmit={handleSubmit}>
        <Form.Input 
            label='Username'
            name='username'
            value={signupBody.username}
            onChange={handleChange}
        />
        <Form.Input
            label='Password'
            name='password'
            type='password'
            value={signupBody.password}
            onChange={handleChange}
        />
        <Form.Input 
            label='Password Confirmation'
            name='password_confirmation'
            type='password'
            value={signupBody.password_confirmation}
            onChange={handleChange}
        />
        <Form.Input 
            label='Name'
            name='name'
            value={signupBody.name}
            onChange={handleChange}
        />
        <Form.Input 
            label='Market'
            name='market'
            value={signupBody.market}
            onChange={handleChange}
        />
        <Form.Input
            label='Image or Logo'
            name='image_url'
            value={signupBody.image_url}
            onChange={handleChange}
        />
        <Form.Button content='Sign Up' />
        <Message hidden={ errors.length > 0 ? false : true } list={ errors } />
        </Form>
    )
}

export default AgencySignup
