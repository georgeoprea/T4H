import '../App.css';
import auth from '../auth.js';

function Login (props) {
  return (
    <div >
        <h1>Login Page (Landing page)</h1>
        <form>
            <label>
                Username:
                <input type="text" name='username'/>
            </label>
            <label>
                Password:
                <input type="password" name='password' minLength='6'/>
            </label>
            <input type='submit' value='Login' />
        </form>
        <button>Don't have an account? Register</button>
        {/* <button onClick={() => {
            auth.login(() => {
                props.history.push("/about");
            });
        }}> Login </button> */}
    </div>
  );
}

export default Login;
