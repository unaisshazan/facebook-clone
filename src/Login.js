import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import {auth,provider} from "./firebase";
import {actionTypes} from './reducer';
import {useStateValue} from './StateProvider'
function Login() {
    const [state, dispatch]=useStateValue();
    const signIn =()=>{
auth.signInWithPopup(provider)
.then(result=>{
dispatch({
    type: actionTypes.SET_USER,
    user: result.user,
})


    console.log(result.user)
}).catch(error=> alert(error.message))

    };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://img.pngio.com/filefacebook-f-logo-2019svg-wikipedia-facebook-query-language-png-1200_1200.png"
          alt=""
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt=""
        />
      </div>
      <Button className="button" type="submit" onClick={signIn}>
      Sign In
      </Button>
    </div>
  );
}

export default Login;
