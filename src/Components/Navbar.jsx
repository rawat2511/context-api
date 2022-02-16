import React, {useContext} from 'react'
import { AuthContext } from '../Context.jsx/AuthContext'

export const Navbar = () => {

  const { isAuth, toggleAuth, setToken, token } = useContext(AuthContext);
  console.log( "IsAuth : ", isAuth);
  console.log( "ToglleAuth : ", toggleAuth );

  const handelLogin = () => {
      if( isAuth ) {
        toggleAuth();
        setToken("");
      }
      else{
          var data = {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
          };
          fetch("https://reqres.in/api/login", {
              method: "POST",
              headers: {
                  "Content-Type" : "application/json"
              },
              body: JSON.stringify(data)
          })
          .then(res => res.json())
          .then(res => {
              console.log("RES =", res);
              toggleAuth();
              setToken(res.token);
          })
      }
  }

  return (
    <div>
        <h1>Navigation Bar :</h1>
        <button onClick={handelLogin}> { isAuth ? "LOGOUT" : "LOGIN" } </button>
    </div>
  )
}
