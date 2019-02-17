import { createActions, createReducer } from 'reduxsauce';
import axios from 'axios';

export const { Types, Creators } = createActions({
  getOrders: () => axios.get('http://5c5d8680ef282f0014c3d956.mockapi.io/api/v1/orders'),
});

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

export const successful = (state = INITIAL_STATE, data) => ({
  ...state,
  data,
});

export const HANDLERS = {
  [Types.GET_ORDERS] : {
    FULFILLED: successful,
    REJECTED: error,
    PENDING: loading,
  }
};

export default createReducer(INITIAL_STATE, HANDLERS);
