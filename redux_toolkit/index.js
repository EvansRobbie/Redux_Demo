const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const icecreamActions = require('./features/iceCream/iceCremSlice').icecreamActions
const fetchUsers = require('./features/users/userSlice').fetchUsers
// console.log('InitialState', store.getState())
store.subscribe(()=>{
    console.log('Updated State', store.getState())
})
store.dispatch(fetchUsers())

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.resocked(3))

// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.restocked(2))

// unsubscribe()