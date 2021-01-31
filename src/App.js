import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Footer from './components/Footer'
import routes from './routes'
import './styles/global.css'

class App extends Component {

  getRoutes = routes => {
    return routes.map((prop, key) => {
        return (
          <Route
            path={prop.path}
            component={prop.component}
            exact={prop.exact}
            key={key}
          />
        );
    });
  };

  render() {
    return(
      <div>
        <BrowserRouter>
          <Switch>
              {this.getRoutes(routes)}
          </Switch>
        </ BrowserRouter>
        <Footer/>
      </div>
    )
  }
}


      

export default App;
