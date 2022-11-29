import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux'
import { boardReducer } from './reducers/board.reducer'
import thunk from 'redux-thunk'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const rootReducer = combineReducers({
    boardModule: boardReducer
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
window.gStore = store