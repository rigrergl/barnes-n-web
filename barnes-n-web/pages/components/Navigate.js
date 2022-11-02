const navigateToLogin = () => {
  window.location = "/Login";
};

const navigateToHome = () => {
  window.location = "/";
};

const navigateToProfile = () => {
  window.location = "/Profile";
};

const navigateToSearch = () => {
  window.location = "/Search";
};

const navigateToHistory = () => {
  window.location = "/History";
};

const navigateToRegistration = () => {
  window.location = "/Registration";
};

const navigateToLogout = () => {
  window.location = "/Logout";
};

const Navigate = () => {
  return (
    <center style={{ marginTop: "35px", height: "50px" }}>
      <button
        style={{
          textAlign: "center",
          fontSize: "15px",
          width: "12%",
          borderRadius: "10px",
          background: "white",
          borderColor: "black",
          minWidth: "65px",
          maxHeight: "100%",
          minHeight: "80%",
        }}
        onClick={navigateToHome}
      >
        Home
      </button>

      <button
        style={{
          textAlign: "center",
          fontSize: "15px",
          width: "12%",
          borderRadius: "10px",
          background: "white",
          borderColor: "black",
          marginLeft: "5px",
          minWidth: "65px",
          maxHeight: "100%",
          minHeight: "80%",
        }}
        onClick={navigateToProfile}
      >
        Profile
      </button>

      <button
        style={{
          textAlign: "center",
          fontSize: "15px",
          width: "12%",
          borderRadius: "10px",
          background: "white",
          borderColor: "black",
          marginLeft: "5px",
          minWidth: "65px",
          maxHeight: "100%",
          minHeight: "80%",
        }}
        onClick={navigateToSearch}
      >
        Search
      </button>

      <button
        style={{
          textAlign: "center",
          fontSize: "15px",
          width: "12%",
          borderRadius: "10px",
          background: "white",
          borderColor: "black",
          marginLeft: "5px",
          minWidth: "65px",
          maxHeight: "100%",
          minHeight: "80%",
        }}
        onClick={navigateToHistory}
      >
        History
      </button>

      <button
        style={{
          textAlign: "center",
          fontSize: "15px",
          width: "12%",
          borderRadius: "10px",
          background: "white",
          borderColor: "black",
          marginLeft: "5px",
          minWidth: "65px",
          maxHeight: "100%",
          minHeight: "80%",
        }}
        onClick={navigateToLogin}
      >
        Login
      </button>

      <button
        style={{
          textAlign: "center",
          fontSize: "15px",
          width: "12%",
          borderRadius: "10px",
          background: "white",
          borderColor: "black",
          marginLeft: "5px",
          minWidth: "65px",
          maxHeight: "100%",
          minHeight: "80%",
        }}
        onClick={navigateToRegistration}
      >
        Register
      </button>

      <button
        style={{
          textAlign: "center",
          fontSize: "15px",
          width: "12%",
          borderRadius: "10px",
          background: "white",
          borderColor: "black",
          marginLeft: "5px",
          minWidth: "65px",
          maxHeight: "100%",
          minHeight: "80%",
        }}
        onClick={navigateToLogout}
      >
        Logout
      </button>
    </center>
  );
};

export default Navigate;
