import React from "react";
import { useEffect, useState } from "react";
import jwt_decode from 'jwt-decode'
import { useNavigate } from "react-router-dom";
import FacebookLogin from 'react-facebook-login';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { AppId } from "../Utils/Configurable";
export default function FacebookSignIn() {
  const navigate = useNavigate()
  const [auth, setAuth] = useState(false)

  const responseFacebook = (response) => {
    console.log(response);

  }

  const componentClicked = (data) => {
    console.log(data);
    // navigate('/dashboard');
  }
  return (
    <FacebookLogin
      appId={AppId}
      autoLoad={false}
      fields="name,email,picture"
      onClick={componentClicked}
      callback={responseFacebook}
      cssClass="my-facebook-button-class"
      // icon="fa-facebook"
      icon={<FacebookOutlinedIcon style={{ color: '#3b5998' }} />}
      buttonStyle={{ width: '208px', background: 'white', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', border: '1px solid #D1D1D1', borderRadius: '5px', height: '42px' }}
    />

  )
}