import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from './components/navbar';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path = {'/'} element={<Home />}/>
        <Route path = {'/login'} element={<Login/>}/>
        <Route path = {'/signup'} element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;