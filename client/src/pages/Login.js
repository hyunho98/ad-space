import { useState } from "react"
import LoginForm from "../components/forms/LoginForm"
import CompanySignup from '../components/forms/CompanySignup'
import AgencySignup from '../components/forms/AgencySignup'
import { Button, Checkbox } from "semantic-ui-react"

function Login() {
  const [showLogin, setShowLogin] = useState(true)
  const [signUpSwitch, setSignUpSwitch] = useState(false)

  return (
    <div className='Form'>
        <h2>Ad Space</h2>
        {showLogin ? (
            <>
                <LoginForm />
                <p>
                    Don't have an account? &nbsp;
                    <Button secondary onClick={() => setShowLogin(false)}>
                    Sign Up
                    </Button>
                </p>
            </>
        ) : (
            <>
                <p>
                    What kind of account would you like to create? <br/>
                    Company &nbsp;
                    <Checkbox 
                    slider
                    value={signUpSwitch}
                    onClick={() => setSignUpSwitch(!signUpSwitch)}
                    /> &nbsp;
                    Advertising Agency
                </p>
                { !signUpSwitch ? <CompanySignup /> : <AgencySignup /> }
                <p>
                    Already have an account? &nbsp;
                    <Button color="secondary" onClick={() => setShowLogin(true)} >
                    Log In
                    </Button>
                </p>
            </>
      )}
    </div>
  )
}

export default Login
