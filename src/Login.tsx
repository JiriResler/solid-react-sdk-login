import { LoginButton } from "@inrupt/solid-ui-react";

function Login() {
  return (
    <>
      <h1>Solid Login App</h1>
      <LoginButton
        oidcIssuer={"https://solidcommunity.net/"}
        redirectUrl={window.location.href}
        onError={console.error}
      />
      <h3>Identity provider: solidcommunity.net</h3>
    </>
  );
}

export default Login;
