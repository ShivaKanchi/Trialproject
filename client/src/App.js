import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'
//pages
import Home from './Pages/Home.page';
import Responsepage from './Pages/Response.page';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='Home' />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/response' element={<Responsepage />} />
      </Routes>
      <div className="App">
        <Home />
      </div>
    </>

  );
}

export default App;
