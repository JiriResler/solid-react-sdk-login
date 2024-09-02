import { LoginButton } from "@inrupt/solid-ui-react";
import { useSession } from "@inrupt/solid-ui-react";
import { Navigate } from "react-router-dom";

function Login() {
  const { session } = useSession();

  if (session.info.isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <h1>Solid Login App</h1>
      <LoginButton
        oidcIssuer={"https://solidcommunity.net/"}
        redirectUrl={new URL('/login', window.location.origin).toString()}
        onError={console.error}
      />
      <h3>Identity provider: solidcommunity.net</h3>
    </>
  );
}

export default Login;
