import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
function Login() {
    const signIn =()=>{

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
