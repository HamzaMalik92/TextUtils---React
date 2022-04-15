import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
  <Navbar logo={logo} title="TextUtils" home="Home" about="About Us"/>
  );
}

export default App;
