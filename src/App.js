import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppHeader from './AppHeader';
import MicroFrontend from './MicroFrontend';

const { REACT_APP_ONE: AppOneHost, REACT_APP_TWO: AppTwoHost } = process.env;

const AppOne = ({ history }) => (
  <MicroFrontend history={history} host={AppOneHost} name="AppOne" />
);
const AppTwo = ({ history }) => (
  <MicroFrontend history={history} host={AppTwoHost} name="AppTwo" />
);

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <AppHeader />
      <Switch>
        <Route exact path="/one" component={AppOne} />
        <Route exact path="/two" component={AppTwo} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default App;
