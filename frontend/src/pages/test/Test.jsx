import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserContext } from '../../context/UserContext'


const Test = () => {
  const {user,token} = useContext(UserContext)
 
  return(
    <div className=''>{token}</div>
  )
}

export default Test