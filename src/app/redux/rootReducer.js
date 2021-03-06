import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as form } from 'redux-form';
import serviceTypes from './reducers/serviceTypes';
import orders from './reducers/orders';
import user from './reducers/user';
import cart from './reducers/cart';

export default combineReducers({
  // Boilerplate reducers
  form,
  router,
  // Custom reducers
  cart,
  user,
  orders,
  serviceTypes,
});
