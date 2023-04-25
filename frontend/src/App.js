
import './App.css';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import{Routes,Route} from 'react-router-dom'
import Privateroute from './components/PrivateRoute/Privateroute';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element ={<Register/>}/>
      <Route path='/login' element ={<Login/>}/>
      <Route path='/app/PrivateRoute' element ={<Privateroute/>}/>
      <Route path='/Navbar' element ={<Navbar/>}/>

    </Routes>
    </div>
  );
}

export default App;
