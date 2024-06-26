import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/header/header.jsx';
import Home from './page/homePage/home.jsx';
import Borrow from './page/borrowPage/borrowPage.jsx';
import Statistic from './page/statisticPage/statistic.jsx';
import Manager from './page/managerPage/manager.jsx';
import Login from './page/auth/login.jsx';
import Register from './page/auth/register.jsx';

import './App.css';

function App() {

  const location = useLocation();
  const showHeader = location.pathname !== '/login' && location.pathname !== '/register';

  return (
    <div className="App">
      {showHeader && <Header/>}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/borrow' element={<Borrow/>} />
        <Route path='/statistic' element={<Statistic/>} />
        <Route path='/manager' element={<Manager/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
