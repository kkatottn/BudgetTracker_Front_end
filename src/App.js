import "./App.css";
import Landing from "./components/Landing";
import Main from "./components/Main";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

function App() {
  const [user, setUser] = useState(null);
  const GOOGLE_CLIENT_ID =
    "882192000932-s84n6fudpcnc0isfa2pojk2fnob39j12.apps.googleusercontent.com";

  function handleCallbackResponse(response) {
    console.log("ID Token: " + response.credential);
    const userObject = jwt_decode(response.credential);
    console.log(userObject);
    console.log("this is id", GOOGLE_CLIENT_ID);
  }

  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signIn"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  if (user === null) {
    return (
      <div>
        <Landing />
      </div>
    );
  } else {
    let selectedUser = null;
    //do something with backend to retrieve id token or any unique identity of selected user
    //set user selectedUser to specific user

    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;
