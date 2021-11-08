import '../App.css';
import auth from '../auth.js';

function Login (props) {
  return (
    <div >
        <h1>Login Page (Landing page)</h1>
        <button onClick={() => {
            auth.login(() => {
                props.history.push("/about");
            });
        }}> Login </button>
    </div>
  );
}

export default Login;
