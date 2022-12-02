import { Navigate } from "react-router-dom";

import { app } from "../firebase";

export const AuthGuard = (Component) => {
  const AuthHoc = () => {
    const authCheck = () => {
      const user = app.auth().currentUser;
      console.log(user, "22222222222222");

      if (user) {
        return <Component />;
      } else {
        <Navigate to="/sign_in" />;
      }
    };

    return authCheck();
  };
  return AuthHoc;
};
