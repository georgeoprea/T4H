import '../App.css';
import auth from '../auth';

function About(props) {
  return (
    <div>
        <h1>About</h1>
        <button onClick={()=>{
            auth.logout(()=>{
                props.history.push("/login")
            });
        }} > Logout</button>
    </div>
  );
}

export default About;
