import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import SamplePage from './Pages/SamplePage';
import Error404 from './Pages/404';
import Login from './Auth/Login';
import Register from './Auth/Register';
import ForgotPasswordPage from './Auth/ForgotPassword';
import IncertStudent from './student/incertStudent';
import Dashboards from './Dashboards';
import Task from './Task';

// const RestrictedRoute = ({ component: Component, ...rest }) => {
//   const { authUser } = useSelector(({ auth }) => auth);
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         authUser ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: '/signin',
//               state: { from: props.location },
//             }}
//           />
//         )
//       }
//     />
//   );
// };

const Routes = () => {
  const { authUser } = useSelector(({ auth }) => auth);
  const location = useLocation();

  if (location.pathname === '' || location.pathname === '/') {
    return <Redirect to={'/dashboard'} />;
  } else if (authUser && location.pathname === '/signin') {
    return <Redirect to={'/dashboard'} />;
  }

  return (
    <React.Fragment>
      <Switch>
        <Route path="/dashboard" component={Dashboards} />
        <Route path="/signin" component={Login} />
        <Route path="/signup" component={Register} />
        <Route path="/forgot-password" component={ForgotPasswordPage} />
        <Route path="/incertstudent" component={IncertStudent} />
        <Route path="/task" component={Task} />
        <Route component={Error404} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
