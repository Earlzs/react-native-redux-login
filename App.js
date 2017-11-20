/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux'

import configureStore from './src/store/index'
import Router from './src/rooter'

let store = configureStore();


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      store: configureStore(() => { this.setState({ isLoading: false }) })
    }
  }
  render() {
    if (this.state.isLoading) {
      console.log('loading app');
      return null;
    }
    return (
      <Provider store={this.state.store}>
        <Router />
      </Provider>
    );
  }
}

