import '../App.css';
import auth from '../auth.js';

function Register (props) {
  return (
    <div >
        <h1>Register Page</h1>
        <form>
            <label>
                Username:
                <input type="text" name='username'/>
            </label>
            <label>
                Email:
                <input type="text" name='email'/>
            </label>
            <label>
                Password:
                <input type="password" name='password' minLength='6'/>
            </label>
        </form>
        <button onClick={() => {
            auth.login(() => {
                props.history.push("/about");
            });
        }}> Register </button>
    </div>
  );
}

export default Login;
