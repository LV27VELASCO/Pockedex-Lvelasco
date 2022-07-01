import {configureStore} from '@reduxjs/toolkit'
import nameUser from './slice/nameUser.slice'

export default configureStore({

    reducer:{
       nameUser
    }

})