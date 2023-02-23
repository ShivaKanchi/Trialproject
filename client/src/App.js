import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'
import { useLoadScript } from "@react-google-maps/api";
//pages
import Home from './Pages/Home.page';
import Responsepage from './Pages/Response.page';
import MapPointpage from './Pages/MapPoint.page';

function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "" // Add your API key
  });
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/response' element={<Responsepage />} />
        <Route path='/mappoint' element={<MapPointpage />} />
      </Routes>
    </>

  );
}

export default App;
