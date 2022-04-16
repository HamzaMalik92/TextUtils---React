import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
  <div style={{'background-color':'skyblue'}}>
  <Navbar logo={logo} title="TextUtils" home="Home" about="About Us"/>
  < TextForm textBoxTitle="Write Text Here"  /></div>
  );
}

export default App;
