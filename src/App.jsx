import { useEffect, useState } from 'react' ; 
import { Link } from 'react-router-dom';
import './App.css'

function App() {
  useEffect(()=>{
    fetch("https://100014.pythonanywhere.com/api/userinfo/", {
    method: "POST",
    headers: {
    "Content-Type": "application/json"
    },
    body: JSON.stringify({
    session_id: "un6beoydda13mcno4kv8lsady27motnz",
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
        <button ><Link to={"https://100014.pythonanywhere.com/en/"}>Login</Link></button>
    </div>
  )
}

export default App
