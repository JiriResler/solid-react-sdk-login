import { useSession } from "@inrupt/solid-ui-react";
import { LogoutButton } from "@inrupt/solid-ui-react";

function Profile() {
  const { session } = useSession();

  return (
    <>
      <h1>Profile</h1>
      <LogoutButton />
      <h3>Your WebID is {session.info.webId}</h3>
    </>
  );
}

export default Profile;
