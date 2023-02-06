import React from 'react'
import { Link, useParams } from 'react-router-dom';

const Home = () => {
          const {session_id} = useParams()     
          const str = session_id       
            let values = str.split('&').map(param => {
              let [key, value] = param.split('=');
              return { [key]: value };
            });
            
            let sessionId = values.find(param => param.hasOwnProperty('session_id'))['session_id'];
            let id = values.find(param => param.hasOwnProperty('id'))['id'];
            
            console.log(sessionId, id);
  return (
    <>
    <div>Home</div>
    <button ><Link to={"https://100014.pythonanywhere.com/en/"}>Login</Link></button>
    </>
  )
}

export default Home