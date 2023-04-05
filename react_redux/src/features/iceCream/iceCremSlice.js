// import { ordered as cakeOrdered } from '../cake/cakeSlice'

// import {createSlice} from '@reduxjs/toolkit'

// const initialState = {
//     numOfIceCream: 20
// }

// const iceCreamSlice = createSlice( {
//     name: 'iceCream',
//     initialState,
//     reducers:{
//         ordered:(state) =>{
//             state.numOfIceCream --
//         },
//         restocked:(state, action)=>{
//             state.numOfIceCream += action.payload
//         }
//     },
//     // extraReducers: {
//     //     ['cake/ordered']:(state) =>{
//     //         state.numOfIceCream--
//     //     }
//     // }
//     extraReducers: (builder)=>{
//         builder.addCase(cakeOrdered, state =>{
//             state.numOfIceCream--
//         })
//     }
// })

// export default iceCreamSlice.reducer
// export const {ordered, restocked } = iceCreamSlice.actions

import { createSlice} from '@reduxjs/toolkit'
import { ordered as CakeOrdered } from '../cake/cakeSlice'

const initialState ={
   numOfIceCream: 20
}

const iceCreamSlice = createSlice({
    name: 'iceCream',
    initialState,
    reducers:{
        ordered:(state)=>{
            state.numOfIceCream--
        },
        restocked:(state,action)=>{
            state.numOfIceCream += action.payload
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(CakeOrdered, state =>{
            state.numOfIceCream --
        })
    }
})

export default iceCreamSlice.reducer
export const {ordered, restocked} = iceCreamSlice.actions