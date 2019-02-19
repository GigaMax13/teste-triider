import configureStore from 'redux-mock-store';
import promiseMiddleware from 'redux-promise-middleware';
import axios from 'axios';
import moxios from 'moxios';

import { loading, error, successful, Creators } from './Orders';

describe('Orders', () => {
  const middlewares = [promiseMiddleware];
  const mockStore = configureStore(middlewares);
  const ordersMock = [
    {
      id: '12',
      createdAt: '2019-02-08T08:12:13.908Z',
      serviceName: 'Conserto de vazamento',
      status: '',
      quotes: [
        {
          id: '12',
          orderId: '12',
          name: 'Montana',
          avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/2fockus/128.jpg',
          price: '973.00',
          stars: 4.6,
          ratings: 61,
          servicesDone: 51,
          hired: false
        },
        {
          id: '27',
          orderId: '12',
          name: 'Zola',
          avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/_ragzor/128.jpg',
          price: '61.00',
          stars: 2.4,
          ratings: 66,
          servicesDone: 78,
          hired: false
        }
      ]
    },
    {
      id: '1',
      createdAt: '2019-02-08T02:18:06.007Z',
      serviceName: 'Marido de aluguel',
      status: 'finalizado',
      quotes: [
        {
          id: '1',
          orderId: '1',
          name: 'Catherine',
          avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/dreizle/128.jpg',
          price: '760.00',
          stars: 5,
          ratings: 58,
          servicesDone: 85,
          hired: true
        },
        {
          id: '16',
          orderId: '1',
          name: 'Tyree',
          avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/clubb3rry/128.jpg',
          price: '869.00',
          stars: 2.2,
          ratings: 82,
          servicesDone: 51,
          hired: false
        }
      ]
    },
    {
      id: '6',
      createdAt: '2019-02-08T04:57:40.540Z',
      serviceName: 'Pintura externa',
      status: 'cancelado',
      quotes: [
        {
          id: '6',
          orderId: '6',
          name: 'Flavio',
          avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/scips/128.jpg',
          price: '598.00',
          stars: 4.1,
          ratings: 29,
          servicesDone: 98,
          hired: false
        },
        {
          id: '21',
          orderId: '6',
          name: 'Cesar',
          avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/doronmalki/128.jpg',
          price: '847.00',
          stars: 3.1,
          ratings: 99,
          servicesDone: 62,
          hired: false
        }
      ]
    }
  ];

  describe('Creators', () => {
    beforeEach(() => {
      moxios.install(axios);

      moxios.wait(() => {
        moxios.requests.mostRecent().respondWith({ status: 200 });
      });
    });

    afterEach(function() {
      moxios.uninstall(axios);
    });

    it('deve criar a ação para obter as orders', () => {
      const store = mockStore();
      const url = 'http://5c5d8680ef282f0014c3d956.mockapi.io/api/v1/orders';

      return store.dispatch(Creators.getOrders()).then(() => {
        const request = moxios.requests.mostRecent();

        expect(request.url).toBe(url);
        expect(request.config.method).toBe('get');
      });
    });
  });

  describe('Reducer', () => {
    it('deve setar o store quando receber uma promise PENDING', () => {
      expect(loading()).toEqual({
        isLoading: true,
        hasError: false,
        data: [],
      });
    });

    it('deve setar o store quando receber uma promise REJECTED', () => {
      expect(error()).toEqual({
        isLoading: false,
        hasError: true,
        data: [],
      });
    });

    it('deve setar o store quando receber um promise FULFILLED', () => {
      const state = {
        isLoading: true,
        hasError: false,
        data: [],
      };

      expect(successful(state, { payload: { data: ordersMock }})).toEqual({
        isLoading: false,
        hasError: false,
        data: ordersMock,
      });
    });
  });
});
