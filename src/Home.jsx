import React, { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import axios from "axios";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get('id');
  const session_id = searchParams.get('session_id');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint = id ? "https://100093.pythonanywhere.com/api/userinfo/" : "https://100014.pythonanywhere.com/api/userinfo/";
        const body = id ? { session_id, id } : { session_id };
        const { data } = await axios.post(endpoint, body);
        console.log("Success:", data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    
    fetchData();
  }, []);
  return (
    <>
    <div>Home</div>
    <button ><Link to={"https://100014.pythonanywhere.com/en/"}>Login</Link></button>
    </>
  )
}

export default Home