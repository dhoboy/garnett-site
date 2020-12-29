import {
  createStore, 
  combineReducers, 
  applyMiddleware,
} from "redux";

import thunk from "redux-thunk";
import logger from "redux-logger";

import api from './reducers/api';
import news from './reducers/news';

let middleware = [thunk];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const store = createStore(
  combineReducers({
    news,
    api,
  }),
  applyMiddleware(...middleware)
);

export default store;
