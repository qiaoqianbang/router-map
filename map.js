import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
class RouteMap extends Component {
  render() {

    const { routes } = this.props;
    const defaultRoute = <Redirect from='/' to='/home' key={'default'} exact></Redirect>
    return (
      <BrowserRouter>
        <Switch>
          {
            routes.map(item => {
              const Routes = item.children === undefined ? [] : item.children;
              const Comp = item.component;
              return <Route key={item.name} path={item.path} component={(props) => {
                return <Comp routes={Routes}{...props} />
              }} />
            }).concat([defaultRoute])
          }
        </Switch>
      </BrowserRouter>
    )
  }
}
export default RouteMap