import { createReducer } from 'reduxsauce';
import axios from 'axios';


export const Types = {
  GET_ORDERS: 'orders/GET_ORDERS',
};

export const Creators = {
  getOrders: () => ({
    type: Types.GET_ORDERS,
    payload: axios.get('http://5c5d8680ef282f0014c3d956.mockapi.io/api/v1/orders'),
  }),
};

export const INITIAL_STATE = {
  isLoading: false,
  hasError: false,
  data: [],
};

export const loading = () => ({
  isLoading: true,
  hasError: false,
  data: [],
});

export const error = () => ({
  isLoading: false,
  hasError: true,
  data: [],
});

export const successful = (state = INITIAL_STATE, { payload: { data } }) => ({
  ...state,
  isLoading: false,
  data,
});

export const HANDLERS = {
  [`${Types.GET_ORDERS}_PENDING`] : loading,
  [`${Types.GET_ORDERS}_REJECTED`] : error,
  [`${Types.GET_ORDERS}_FULFILLED`] : successful,
};

export default createReducer(INITIAL_STATE, HANDLERS);
