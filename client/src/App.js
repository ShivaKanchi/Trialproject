import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'
//pages
import Home from './Pages/Home.page';
import Responsepage from './Pages/Response.page';
import MapPointpage from './Pages/MapPoint.page';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/response' element={<Responsepage />} />
        <Route path='/mappoint' element={isLoaded ? <MapPointpage /> : null} />
      </Routes>
    </>

  );
}

export default App;
