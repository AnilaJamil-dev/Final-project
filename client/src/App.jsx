// import React, { useContext } from 'react'
// import Admin from './Admin'
// import User from './User'
// import Guest from './Guest'
// import { GlobalContext } from './Context/context'
// import { decodeToken } from 'react-jwt'

// const ComponentByRole = {
//   'admin': Admin,
//   'user': User,
//   'guest': Guest
// }

// const getUserRole = (params) => ComponentByRole[params] || ComponentByRole['guest']
// const getDecodeToken = (token) => decodeToken(token) || null

// export default function App() {

//   const { state, dispatch } = useContext(GlobalContext)
//   const currentToken = getDecodeToken(state.token)
//   // console.log(state.token)
//   const CurrentUser = getUserRole(currentToken.role) //it is giving error when logged out
//   // console.log(currentToken)
//   return <CurrentUser />
// }


import React, { useContext} from 'react'
import Admin from './Admin'
import User from './User'
import Guest from './Guest'
import { GlobalContext } from './Context/context'
import { decodeToken } from 'react-jwt'


export const AppRoute= '/'
// export const AppRoute= 'http://localhost:3500/'


const ComponentByRoles = {
  'admin': Admin,
  'user': User,
  'guest': Guest
}



const getUserRole = (params) => ComponentByRoles[params] || ComponentByRoles['guest']

export default function App() {
  const { state, dispatch } = useContext(GlobalContext)

  const decodeUser = (token) => {
    if (!token) {
      return undefined
    }
    else {
      const res = decodeToken(token)
      return res?.role
    }
  }

  const currentToken = decodeUser(state.token)
  const CurrentUser = getUserRole(currentToken)
  return <CurrentUser />
}