import './Login.css';

/**
 * 1. Text field for User name
 * 2. Text field for Password
 * 3. Button for Login
 * 4. Button for Signup
 * 5. Button for forgot password
 */
export default function Login() {
  return (
    <div className="login">
      <textarea> User Name </textarea>
      <input> Password </input>
      <h2> Login </h2>
      <h2> Signup </h2>
      <p> forget your password </p>
    </div>
  );
}

