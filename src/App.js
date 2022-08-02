import "./App.css";
import Landing from "./components/Landing";
import Main from "./components/Main";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import axios from 'axios';
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

  const URL = "https://kashnote.herokuapp.com"

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
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    setDate({'month': month, 'year': year})
  }


  const handleUser = (user_email) => {
    //axios call to get_user
    axios.get(`${URL}/user/${user.email}`)
    .then((res)=>{
      setUser(res)
    })
    .catch(()=>{
      axios.post(`${URL}/user`, {'id_token': user.id_token, 'email': user.email, 'name': user.name})
      .then((res) => {
        const newUser = {"user_id": res.id, "id_token": user.id_token, "email": user.email, "name": user.name}
        setUser(newUser)
    })
      .catch((err) => {
        console.log("Error posting a new user")
      })
    })
  }

  const getDefaultCategories = () => {
    // axios call to get_all_default_categories
    // .then -> setDefaultCategories 
    // .catch -> return error msg
    axios.get(`${URL}/category`)
  }

  const getUserCategories = (user_id) => {
    // axios call to get user categories
    // .then -> setUserCategories
    // .catch -> return err msg
  }

  const getBudget = (user_id, month, year) => {
    // axios call to get budget
    // .then -> setBudget
    // .catch -> return err msg 
  }

  const getExpenses = (user_id) => {
    // axios call to get expenses
    // .then -> setExpenses
    // .catch -> return .... 
  }

  const addExpense = (data) => {
    // axios post with data in request body
    // .then -> newExpenses = getExpenses
    // newExpense = {'description': data.descript}
    // setExpenses({expenses..., newExpense})
    //          setExpenses(newExpenses)

  }
  
  const editExpense = (expense_id) => {
    // axios patch with expense id
    // .then -> setExpense ({expense})......
  }

  const addBudget = (budgetData) => {
    // axios post with budget data in request body
    // .then -> setBudget
  }

  const editBudget = (budgetData) => {
    // axios patch with budget data in req body
    // .then -> setBudget
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
