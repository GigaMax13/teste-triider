import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Redirect, Route, Router, Switch } from 'react-router';

import { history, store } from './store';

import { Layout } from './components/Layout';
import MeusOrcamentos from './pages/MeusOrcamentos/MeusOrcamentos';

import './App.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Layout>
            <Switch>
              <Route
                exact
                path='/'
                render={() => (
                  <>
                    <Redirect to='/meus-orcamentos' />
                  </>
                )}
              />
              <Route path="/meus-orcamentos" component={MeusOrcamentos} />
            </Switch>
          </Layout>
        </Router>
      </Provider>
    );
  }
}

export default App;
