import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login from './Login';
import Signup from './Signup';
import ChatScreen from './ChatScreen';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
// import Test from './Test';
function App() {
  return (
   <>
  <Router>
      {/* <Link to="">    Login</Link> */}
      {/* <Link to="/signup">     Sign up</Link> */}
      {/* <Link to="/chatscreen">  Sign in</Link> */}
      <Routes>
      <Route path="/" Component={Login}/>
      <Route path="/signup" Component={Signup}/>
      <Route path="/chatscreen" Component={ChatScreen}/>
      </Routes>
      </Router>
   </>
  );
}
export default App;
