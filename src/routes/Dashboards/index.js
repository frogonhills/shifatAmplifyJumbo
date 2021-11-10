import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import PageLoader from '../../@jumbo/components/PageComponents/PageLoader';

const Dashboards = ({ match }) => {
  const requestedUrl = match.url.replace(/\/$/, '');
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Redirect exact from={`${requestedUrl}/`} to={`${requestedUrl}/main`} />
        <Route path={`${requestedUrl}/main`} component={lazy(() => import('./Main'))} />
        <Route path={`${requestedUrl}/profile`} component={lazy(() => import('./profile'))} />
      </Switch>
    </Suspense>
  );
};

export default Dashboards;
