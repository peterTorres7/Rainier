import './Login.css';
import { Button, Grid, TextField } from '@material-ui/core';
 
/**
 * 3. Button for Login
 * 4. Button for Signup
 * 5. Button for forgot password
 * 6. Layout elements in form
 */
export default function Login() {
  return (
    <form className="login">
      <TextField label="Username"/>
      <TextField label="Password"/>
      <Button> Login </Button>
      <Button> Sign Up </Button>
      <Button> Forgot your password? </Button>
    </form>
  );
}

