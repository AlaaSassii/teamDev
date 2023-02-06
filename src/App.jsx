import { useEffect, useState } from 'react' ; 
import { Link , useParams , Route, Routes, useLocation} from 'react-router-dom';
import './App.css'
import Home from './Home';

function App() {
 
 
  return (
    <div className="App">
        <Routes>
          <Route path="/task" element={<Home/>}/>
        </Routes>
    </div>
  )
}

export default App
