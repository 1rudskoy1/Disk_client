import {applyMiddleware,combineReducers, createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import fileReducer from "./fileReducer";
import userReducer from "./userReducer";
import appReducer from "./appReducer";
import uploadReducer from './uploadReducer'
const rootReducer = combineReducers({
    user: userReducer,
    files: fileReducer,
    upload: uploadReducer,
    app: appReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
