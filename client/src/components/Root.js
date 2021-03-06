import React                              from 'react';
import PropTypes                          from 'prop-types';
import { Provider }                       from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App                                from './App.js';
import history                            from '../history';

const Root = ( { store } ) => {

  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/:filter?" component={App}/>
      </Router>
    </Provider>
  )
};

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;