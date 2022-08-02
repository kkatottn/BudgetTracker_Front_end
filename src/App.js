import "./App.css";
import Landing from "./components/Landing";
import Main from "./components/Main";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
// import { DateTime } from 'luxon';
//import env from "react-dotenv";

function App() {
  const [user, setUser] = useState(null);
  const [date, setDate] = useState({'month': null, 'year': null});
  const [defaultCategories, setDefaultCategories] = useState([]);
  const [userCategories, setUserCategories] = useState([]);
  const [budget, setBudget] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [expenseData, setExpenseData] = useState({});

  const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  // function handleCallbackResponse(response)
  const handleCallbackResponse = (response) => {
    //console.log("ID Token: " + response.credential);
    const userObject = jwt_decode(response.credential);
    //handleUser(userObject.email)
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

  const getDate = () => {
    // grab date from date time
    // setDate 
  }


  const handleUser = (user_email) => {
    //axios call to get_user
    //.then -> setUser
    //.catch => axios call to POST new_user()
  }

  const getDefaultCategories = () => {
    // axios call to get_all_default_categories
    // .then -> setDefaultCategories 
    // .catch -> return error msg
  }

  const getUserCategories = (user_id) => {
    // axios call to get user categories
    // .then -> setUserCategories
    // .catch -> return err msg
  }

  const getBudget = (user_id) => {
    // axios call to get budget
    // .then -> setBudget
    // .catch -> return err msg 
  }

  const getExpenses = (user_id) => {
    // axios call to get expenses
    // .then -> setExpenses
    // .catch -> return .... 
  }

  const addExpense = (user_id, category_id, amount, description, month, year) => {
    
  }







  //Handling render different page depend on user status
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
