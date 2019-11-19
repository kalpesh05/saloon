import { combineReducers } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import counter from './../action/counter';


export default (history) => combineReducers({
    router: connectRouter(history),
    counter,
  });