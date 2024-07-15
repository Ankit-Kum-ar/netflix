// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import ScrollToTop from './Helpers/ScrolltoTop';

function App() {
  return (
    <div>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
