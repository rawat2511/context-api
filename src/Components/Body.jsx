import React, {useContext} from 'react'
import { AuthContext } from '../Context.jsx/AuthContext'

export const Body = () => {

  const { token } = useContext(AuthContext);

  return (
    <div>
        {
            token ? <h1>{"Logged In : " + token}</h1> : <h1>Not Logged In</h1> 
        }
    </div>
  )
}
