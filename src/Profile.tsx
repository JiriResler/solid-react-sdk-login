import { useSession } from "@inrupt/solid-ui-react";
import { LogoutButton } from "@inrupt/solid-ui-react";
import { Navigate } from "react-router-dom";

function Profile() {
  const { session } = useSession();

  if (!session.info.isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <h1>Profile</h1>
      <LogoutButton />
      <h3>Your WebID is {session.info.webId}</h3>
    </>
  );
}

export default Profile;
