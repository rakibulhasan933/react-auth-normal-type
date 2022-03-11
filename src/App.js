import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
// import PrivateOutlet from './components/PrivateOutlet/PrivateOutlet';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import Shipping from './components/Shipping/Shipping';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/shipping' element={
          <PrivateRoute>
            <Shipping />
          </PrivateRoute>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
