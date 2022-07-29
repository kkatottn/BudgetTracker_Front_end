import "./App.css";
import Landing from "./components/Landing";
import Main from "./components/Main";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
//import env from "react-dotenv";

function App() {
  const [user, setUser] = useState(null);
  const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  function handleCallbackResponse(response) {
    //console.log("ID Token: " + response.credential);
    const userObject = jwt_decode(response.credential);
    setUser(userObject);
    //we can access to full name with .name, email with .email, given_name, family_name
    //console.log("this is id", GOOGLE_CLIENT_ID);
  }

  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signIn"), {
      theme: "outline", // filled_blue, filled_black
      size: "large",
      width: "350px", // maximum width : 400px
      shape: "circle", // rectangular
    });
  }, []);

  if (user === null) {
    return (
      <div>
        <Landing />
      </div>
    );
  } else {
    //do something with backend to retrieve id token or any unique identity of selected user
    //set user selectedUser to specific user

    return (
      <div>
        <Main user={user}/>
      </div>
    );
  }
}

export default App;
