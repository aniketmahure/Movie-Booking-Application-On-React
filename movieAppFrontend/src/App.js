import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Movie from './pages/Movies';
import Register from './pages/Register';
import Reset from './pages/Reset';
import About from './components/About';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoutes from './components/PrivateRoutes';
import UserDashboard from './pages/user-routes/UserDashboard';
import Book from './pages/Book';
function App() {
  return (
    <BrowserRouter>
    <ToastContainer position='bottom-center'/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/movie' element={<Movie />} />
      <Route path='/about' element={<About />} />
      <Route path='/reset' element={<Reset />} />
      <Route path='/book' element={<Book />} />
      <Route path='/private' element={<PrivateRoutes/>}>
        <Route path='user' element={<UserDashboard></UserDashboard>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
