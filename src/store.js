import {composeWithDevTools} from 'redux-devtools-extension';

import { createStore, applyMiddleware } from 'redux';
import reduxTunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {}
const middleware = [reduxTunk]

const store = createStore( rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store