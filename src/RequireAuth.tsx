import { useSession } from "@inrupt/solid-ui-react";
import { Navigate } from "react-router-dom";

function RequireAuth({ children }) {
  const { session } = useSession();

  return session.info.isLoggedIn ? children : <Navigate to="/login" replace />;
}

export default RequireAuth;
