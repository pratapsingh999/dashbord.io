import { useAuth0 } from "@auth0/auth0-react";

function Signform() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <>
      {isAuthenticated && <p className="name">{user.name}</p>}
      {isAuthenticated ? (
        <button className="btn1"
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          <p>Logout</p>
        </button>
      ) : (
        <button className="btn1" onClick={() => loginWithRedirect()}>
          <p>LogIn</p>
        </button>
      )}
    </>
  );
}

export default Signform;
