import { Fragment } from "react";
import { Route } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

export const UserTemplate = (props) => {
  const { Component, ...propsRoute } = props;
  return (
    <Route
      exact
      path={props.path}
      render={(propsRoute) => {
        //{path:'/home', component:Home}
        return (
          <div>
            <Navbar {...propsRoute} />
            <div className="bg-grey-lighter min-h-screen flex flex-col">
              <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <Component {...propsRoute} />
                  
                </div>
                <div className="text-grey-dark mt-6">
                  Already have an account?
                  <a
                    className="no-underline border-b border-blue text-blue"
                    href="../login/"
                  >
                    Log in
                  </a>
                  .
                </div>
              </div>
            </div>
            <Footer {...propsRoute} />

           
          </div>
        );
      }}
    />
  );
};
