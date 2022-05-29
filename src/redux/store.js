import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"; //for creating asynchronous request
import rootReducer from "./reducers/rootReducer";

// redux middlewares
const middlewares = [thunk];

//using logger to debug code easily
if (process.env.NODE_ENV === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const store = createStore(rootReducer, {}, applyMiddleware(...middlewares));

export default store;