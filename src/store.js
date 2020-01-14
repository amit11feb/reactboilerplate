
import { applyMiddleware, createStore } from "redux";
 import thunk from "redux-thunk";
 import reducer from "./reducers";
 
 
 
 
// applyMiddleware supercharges createStore with middleware:
export default  createStore(reducer, applyMiddleware(thunk))