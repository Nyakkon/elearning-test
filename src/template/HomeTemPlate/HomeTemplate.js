import { Fragment } from "react";
import { Route } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
export const HomeTemplate = (props) => {
    const {Component,...propsRoute} = props;
       return (
        <Route
          exact
          path={props.path}
          render={(propsRoute) => {
            //{path:'/home', component:Home}
            return (
              <div>
                <Navbar {...propsRoute} />
                <Component {...propsRoute} />
                <Footer {...propsRoute} />
              </div>
            );
          }}
        />
      );
}
