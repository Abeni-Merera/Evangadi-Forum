import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Home = () => {
    const [userData, setUserData] = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
      if(!userData.user) navigate('/login')
    }, [userData.user, navigate]);
  return (
    <div>Home</div>
  )
}

export default Home