import logo from './logo.svg';
import './App.css';

//components
import AddUser from './components/AddUser';
import NavBar from './components/NavBar';
import AllUser from './components/AllUser';
import Home from './components/Home';
import EditUser from './components/EditUser';

import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes> 
        <Route path='/home' element={<Home />} />
        <Route path ='/allusers' element={<AllUser />} />              
        <Route path ='/adduser' element={<AddUser />} />              
        <Route path ='/edituser/:id' element={<EditUser />} />              
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
