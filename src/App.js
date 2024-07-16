// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import ScrollToTop from './Helpers/ScrolltoTop';
import Browser from './pages/Browser';
import { useDispatch } from 'react-redux';
function App() {

  return (
    <div>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/browser' element={<Browser/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
