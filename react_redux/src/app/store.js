import {configureStore} from '@reduxjs/toolkit'
// const reduxLogger = require('redux-logger')
import cakeReducer from '../features/cake/cakeSlice'
import iceCreamReducer from '../features/iceCream/iceCremSlice'
import userReducer from '../features/users/userSlice'
// const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer:{
        cake: cakeReducer, 
        iceCream: iceCreamReducer,
        user: userReducer
    },
    // middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)
})

export default store