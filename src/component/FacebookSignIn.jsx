import React from "react";
import { useEffect, useState } from "react";
import jwt_decode from 'jwt-decode'
import { useNavigate } from "react-router-dom";
import FacebookLogin from 'react-facebook-login';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { AppId } from "../Utils/Configurable";
import { useDispatch } from "react-redux";
import { userLoginAction } from "../Redux/actions/auth";
import { toast } from 'react-toastify';
import UserServices from "../service/UserService";
import { userEmailAction } from "../Redux/actions/auth";

export default function FacebookSignIn() {
  const navigate = useNavigate()
  const [auth, setAuth] = useState(false)
  const dispatch = useDispatch()
  const location = window.location.pathname;
  const notify = (data) => toast.success(data);
  const responseFacebook = (response) => {
    console.log(response)
    if (location.includes('/login')) {
      try {
        UserServices.LoginUserByEmail(response.email).then(
          (res) => {
            console.log(res)
            if (res.status === 200) {
              dispatch(userLoginAction(response))
              localStorage.setItem('loginType', 'existed')
              navigate('/dashboard')
            }

          })
      }
      catch {
        notify("Try after few minutes")
      }
    } else {
      var [first_namee , last_namee] = response.name.split(' ')
      const value = {

        first_name: first_namee,
        last_name: last_namee,
        email: response.email,
        social_login: true,
        user_type: "INVESTOR"
      }
      try {
        UserServices.CreateUser(value).then(
          (response) => {
            console.log(response)
            if (response.status === 201) {
              dispatch(userLoginAction(response.data))

              navigate('/about-you')
            }

          })
      }
      catch {
        notify("Try after few minutes")
      }
    }

  }

  return (
    <FacebookLogin
      appId={AppId}
      autoLoad={false}
      fields="name,email,picture"
      // onClick={componentClicked}
      callback={responseFacebook}
      cssClass="my-facebook-button-class"
      // icon="fa-facebook"
      icon={<FacebookOutlinedIcon style={{ color: '#3b5998' }} />}
      buttonStyle={{ width: '208px', background: 'white', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', border: '1px solid #D1D1D1', borderRadius: '5px', height: '42px' }}
    />

  )
}