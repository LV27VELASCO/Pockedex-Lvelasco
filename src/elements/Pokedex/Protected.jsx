import React from 'react'
import {useSelector} from 'react-redux'
import { Outlet, Navigate} from 'react-router-dom'

const Protected = () => {
    const nameUser= useSelector(state => state.nameUser)
    
    if(nameUser){
        return <Outlet/>
    }else{
        return <Navigate to='login'/>
    }
  
}

export default Protected