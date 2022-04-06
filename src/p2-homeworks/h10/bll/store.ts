import {loadingReducer} from './loadingReducer'
import {applyMiddleware, combineReducers, createStore} from "redux";
import {themeReducer} from "../../h12/bll/themeReducer";
import thunk from "redux-thunk";
import {requestReducer} from "../../h13/bll/requestReducer";

const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer,
    responseMessage: requestReducer,
})

export type AppStoreType = ReturnType<typeof reducers>

const store = createStore(reducers, applyMiddleware(thunk))

export default store



// @ts-ignore
window.store = store // for dev
