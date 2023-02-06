import { useEffect, useState } from 'react' ; 
import { Link , useParams , Route, Routes, useLocation} from 'react-router-dom';
import './App.css'
import Home from './Home';

function App() {
 
  useEffect(()=>{
  

    fetch("https://100014.pythonanywhere.com/api/userinfo/", {
    method: "POST",
    headers: {
    "Content-Type": "application/json"
    },
    body: JSON.stringify({
    session_id:"un6beoydda13mcno4kv8lsady27motnz" ,
    id:"100098"
  })
  
})
  .then(response => response.json())
  .then(data => {
    console.log("Success:", data);
  })
  .catch(error => {
    console.error("Error:", error);
  });
  },[])
  return (
    <div className="App">
        <Routes>
          <Route path="/:session_id" element={<Home/>}/>
            
        </Routes>
    </div>
  )
}

export default App
