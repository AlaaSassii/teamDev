import React, { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom';

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get('id');
  const session_id = searchParams.get('session_id');
  useEffect(()=>{
    if(id){
      fetch("https://100014.pythonanywhere.com/api/userinfo/", {
    method: "POST",
    headers: {
    "Content-Type": "application/json"
    },
    body: JSON.stringify({
    session_id ,
    id
  })
  
})
  .then(response => response.json())
  .then(data => {
    console.log("Success:", data);
  })
  .catch(error => {
    console.error("Error:", error);
  });
    }
    else{
      fetch("https://100014.pythonanywhere.com/api/userinfo/", {
    method: "POST",
    headers: {
    "Content-Type": "application/json"
    },
    body: JSON.stringify({
    session_id ,
  })
  
})
  .then(response => response.json())
  .then(data => {
    console.log("Success:", data);
  })
  .catch(error => {
    console.error("Error:", error);
  });
    }
  },[])
  return (
    <>
    <div>Home</div>
    <button ><Link to={"https://100014.pythonanywhere.com/en/"}>Login</Link></button>
    </>
  )
}

export default Home