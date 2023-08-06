import './App.css';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
//pages
import Home from './Pages/Home.page';
import MapGet from './Components/Map/MapGet';
import Response from './Components/Response/Response.component';
import Register from './Components/Register/Register.component';
import FileManger from './Components/FileManager/FileManger';
import Animation from './Components/Animations/Animation';
import HoverAnimation from './Components/Animations/HoverAnimation/HoverAnimation';



function App() {
  const navigate = useNavigate()

  return (
    <>

      <div className='flex justify-center p-3'  >
        <button className='px-5 w-auto flex flex-row gap-5  font-extrabold text-3xl font-mono border rounded-md border-black ' onClick={() => { navigate('/') }}>
          <h1 className='bg-gradient-to-b from-[#d40e0e] to-[#000000] text-transparent bg-clip-text'>T r i a l    P r o j e c t</h1>
        </button >
      </div>

      <Routes>
        {/* default */}
        <Route path='/' element={<Navigate to='/home' />} />
        {/* Home */}
        <Route path='/home' element={<Home />} />
        {/* Components */}
        <Route path='/form' element={<Register />} />
        <Route path='/response' element={<Response />} />
        <Route path='/mappoint' element={<MapGet />} />
        <Route path='/filemanager' element={<FileManger />} />
        <Route path='/animation' element={<Animation />} />
        <Route path='/hoveranimation' element={<HoverAnimation />} />

      </Routes>


    </>

  );
}

export default App;