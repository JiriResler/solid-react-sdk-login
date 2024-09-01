import { LoginButton } from "@inrupt/solid-ui-react";

function Login() {
  return (
    <>
      <h1>Solid Login App</h1>
      <LoginButton
        oidcIssuer={"https://solidcommunity.net/"}
        redirectUrl={new URL("/", window.location.href).toString()}
        onError={console.error}
      />
      <h3>Identity provider: solidcommunity.net</h3>
    </>
  );
}

export default Login;
