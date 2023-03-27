console.log('From index Js')
const redux = require('redux')
const createStore = redux.createStore
const combinedReducers = redux.combineReducers
const applyMiddleware  = redux.applyMiddleware
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()
// ====== CORE CONCEPTS ====
// Store - holds the state of the application
// action - Describes what happened
// Reducer - -Ties the store and the action--- handles the action and decides how to update state

//  ===== PRINCIPLES OF REDUX=====
// ***** First Principle ****
// The global state of your application is stored as an object inside a single store
//  ***** Second Prionciple *****
// The only way to update state is to dispatch an action
//  ****** Third Principle ********
//  To specify how the state tree is updated based on actions, We write pure reducers
//  Reducer - (PreviousState, action) => new state
//  const reducer = (state, action) =>{
//     switch(action.type){
//         case 'Cake_Ordered': return{
//             noOfCake: state.noOfCake - 1
//         }
//     }
//  }
//  Actions 
// They are he only way the app can interact with the store
// They are javascript objects
// They carry some infomation from the app to the redux store
// Have a 'type' property that describes something that happened in the application
// The 'type' property is is typically defined as a string constant

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const ICECREAM_ORDERED= 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'

const orderCake = () =>{
return {
        type: CAKE_ORDERED,
        payload: 1
    }
}
const RestockCake = (qty = 1) =>{
    return {
            type: CAKE_RESTOCKED,
            payload: qty
        }
}
const orderIcecream = () =>{
return {
        type: ICECREAM_ORDERED,
        payload: 1
    }
}
const RestockIcecream = (qty = 1) =>{
    return {
            type: ICECREAM_RESTOCKED,
            payload: qty
        }
    }
//  ===== Reducers =====
//  They specify how app state changes in response to actions sent to the store
//  NB: actions only describe what happened but reducers explains how the application state changes
// ? Its a function that accepts state and action as arguments and returns the next state of application

// const initialState = {
//     numOfCakes: 10,
//     numOfIceCream:20
// }
const initialCakeState = {
    numOfCakes: 10,
}
const initialIceState = {
    numOfIceCream:20
}

const cakeReducer = (state= initialCakeState, action) =>{
    switch(action.type){
        case CAKE_ORDERED: return{
            ...state,
            numOfCakes: state.numOfCakes -1
        }
        case CAKE_RESTOCKED: return{
            ...state, numOfCakes:state.numOfCakes + action.payload
        }
        default:
            return state
    }
}
const iceReducer = (state= initialIceState, action) =>{
    switch(action.type){
        case ICECREAM_ORDERED: return{
            ...state, numOfIceCream: state.numOfIceCream -1
        }
        case ICECREAM_RESTOCKED: return{
            ...state, numOfIceCream:state.numOfIceCream + action.payload
        }
        default:
            return state
    }
}
//  Redux Store
// one store for the entire application
//  Responsibilities :
// Holds application state
// allows access to state via getState()
// allows state to be updated via dispatch
// Register listeners via subscribe(listener
// Handles unregistering of listeners via the function returned by suscribe(listener)
const rootReducer = combinedReducers({
    cake: cakeReducer,
    iceCream : iceReducer
})
const store = createStore(rootReducer, applyMiddleware(logger))
// const iceStore = createStore(iceReducer)
console.log(store.getState())
 const usubscribe = store.subscribe(()=>{})
 store.dispatch(orderCake())
 store.dispatch(orderCake())
 store.dispatch(orderCake())
 store.dispatch(orderIcecream())
 store.dispatch(orderIcecream())
 store.dispatch(RestockCake(3))
 store.dispatch(RestockIcecream(2))

usubscribe()