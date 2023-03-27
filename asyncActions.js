const redux = require('redux')
const createStore = redux.createStore
const thunkMiddleware = require('redux-thunk').default
const applyMiddleware = redux.applyMiddleware
const axios = require('axios')


const initialState = {
    loading:false,
    users:[],
    error:''
}

const FETCH_USER_REQUESTED = 'FETCH_USER_REQUESTED'
const FETCH_USER_SUCCEED = 'FETCH_USER_SUCCEED'
const FETCH_USER_FAILED = 'FETCH_USER_FAILED'

const fetchUsersRequest = () =>{
    return {
        type: FETCH_USER_REQUESTED,

    }
}
const fetchUsersSuccess = (users) =>{
    return {
        type: FETCH_USER_SUCCEED,
        payload: users
        
    }
}
const fetchUsersFailure = (error) =>{
    return {
        type: FETCH_USER_FAILED,
        payload: error
        
    }
}

const reducer =  (state= initialState, action) =>{
    switch(action.type){
        case FETCH_USER_REQUESTED:return{
            ...state,
            loading:true
        }
        case FETCH_USER_SUCCEED: return{
            loading:false,
            users:action.payload,
            error: ''
        }
        case FETCH_USER_FAILED: return{
            loading:false,
            users:[],
            error:action.payload
        }
        default:
        return state
    }
}

const fetchUsers = () =>{
    
    return (dispatch)=>{
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            const users = response.data?.map((user)=> user.id)
            dispatch(fetchUsersSuccess(users))
        })
        .catch((error)=>{
            dispatch(fetchUsersFailure(error.message))
            // error
        })
    }
}
const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(()=> {
    console.log(store.getState())
})
store.dispatch(fetchUsers())
