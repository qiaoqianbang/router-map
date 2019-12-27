import React from 'react';
import defaultRoutes from './routes';
import RouteMap from './map';
const index = (props) => {
  const Routes = props.routes ? props.routes : defaultRoutes;
  return (
    <RouteMap routes={Routes}{...props}></RouteMap>
  );
}

export default index;
