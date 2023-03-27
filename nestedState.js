const redux = require('redux')
const produce = require('immer').produce

const createStore = redux.createStore
const initialState = {
    name: 'Evans',
    address: {
        street: '123 Kayole street',
        city: 'Nairobi',
        state:'Kenya'
    },

}
 const STREET_UPDATED = 'STREET_UPDATED'

 const updateState = (street= '456 Westlands ') => {
    return{
        type:STREET_UPDATED,
        payload: street
    }
 }

 const reducer = (state = initialState, action) =>{
    switch(action.type){
        case STREET_UPDATED:
            // return{
            // // ...state, address:{
            // //     ...state.address, street: action.payload
            
            // }
            return produce(state, (draft)=>{
                draft.address.street = action.payload
            })
        default:
            return state
    }
 }

 const store = createStore(reducer)
console.log('initialAddress',store.getState())

const unsubscribe = store.subscribe(()=>console.log('Updated Street', store.getState()))

store.dispatch(updateState('126 Rongai'))
unsubscribe()