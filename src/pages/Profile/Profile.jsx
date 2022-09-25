import React from 'react'
import InfoProfile from './Main/InfoProfile';
import NavbarProfile from './NavbarProfile';
import { Route, Switch, useLocation } from "react-router-dom";
import Attendance from './Main/Attendance';
import MyCourse from './Main/MyCourse';
export default function Profile(props) {

  const location =  useLocation();
  const routes = [
    {
      path: '/profile/info-course',
      exact: true,
      name: 'InfoProfile',
      component: InfoProfile,
    },
    {
      path: '/profile/attendance',
      exact: true,
      name: 'Attendance',
      component: Attendance,
    },
    {
      path: '/profile/mycourse',
      exact: true,
      name: 'MyCourse',
      component: MyCourse,
    },
  ];

  

  return (
    <div>

      <div className='container-profile mx-auto'>
        <div className="box-profile flex">
          <div className="profile-left w-1/4 self-stretch">
            <NavbarProfile />
          </div>
          <div className="profile-right w-3/4 p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        
            <Switch>
              {routes.map((route, idx) => {
                console.log(route)
                return (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props) => <route.component {...props} />}
                  />
                );
              })}
            </Switch>

          </div>
        </div>
      </div>


    </div>
  )
}
