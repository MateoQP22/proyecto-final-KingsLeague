import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import MainNosotros from '../components/nosotros/MainNosotros'
import useAuth from "../hooks/useAuth";

const NosotrosPage = () => {
    const navigate = useNavigate();
    const { user} = useAuth();

    useEffect(() => {
        if (Object.keys(user).length) {
          navigate('/nosotros');
        }
      }, [user]);
  return (
    <MainNosotros/>
  )
}

export default NosotrosPage