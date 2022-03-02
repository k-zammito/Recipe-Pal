import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from './auth';
import { recipes } from './recipes';
import { fetchedRecipes } from './fetchRecipes';
import { promiseMiddleware } from './promiseMiddleware';

const reducer = combineReducers({
  auth,
  recipes,
  fetchedRecipes,
});

const middleware = composeWithDevTools(
  applyMiddleware(
    thunkMiddleware,
    promiseMiddleware,
    createLogger({ collapsed: true })
  )
);

const store = createStore(reducer, middleware);

export default store;
export * from './auth';
export * from './recipes';
export * from './fetchRecipes';
