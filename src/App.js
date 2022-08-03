import "./App.css";
import Landing from "./components/Landing";
import Main from "./components/Main";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import axios from 'axios';
import { DateTime } from 'luxon';
import { getDatasetAtEvent } from "react-chartjs-2";
//import env from "react-dotenv";

function App() {
  const [user, setUser] = useState(null);
  const [date, setDate] = useState({'month': null, 'year': 2022});
  const [defaultCategories, setDefaultCategories] = useState([]);
  const [userCategories, setUserCategories] = useState([]);
  const [budget, setBudget] = useState(null);
  const [expenses, setExpenses] = useState([]);

  const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  // function handleCallbackResponse(response)
  const handleCallbackResponse = (response) => {
    //console.log("ID Token: " + response.credential);
    const userObject = jwt_decode(response.credential);
    // setUser(userObject);
    //console.log(userObject.email);
    handleUser(userObject);

    //we can access to full name with .name, email with .email, given_name, family_name
    //console.log("this is id", GOOGLE_CLIENT_ID);
  }

  const URL = "https://kashnote-server.herokuapp.com"

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

    getDate();
    getDefaultCategories();
    // getUserCategories(user.user_id);
    // getBudget(user.user_id);
    // getExpenses(user.user_id);
    
  }, []);

  const getDate = () => {
    // grab date from date time
    // setDate 
    const today = new Date();
    //const year = today.getFullYear();
    const month = today.getMonth();
    setDate({...date, "month":month})
  }


  const handleUser = (userObject) => {
    //axios call to get_user
    axios.get(`${URL}/user/${userObject.email}`)
    .then((res)=>{
      console.log("exist user!")
      setUser(res.data)
    })
    .catch((err)=>{
      console.log(err.response);
      axios.post(`${URL}/user`, userObject)
      .then((res) => {
        console.log("we are creating new user!")
        const newUser = {"user_id": res.data.id,"email": userObject.email, "name": userObject.name}
        setUser(newUser)
    })
      .catch(() => {
        console.log("Error posting a new user")
      })
    })
  }

  const getDefaultCategories = () => {
    // axios call to get_all_default_categories
    // .then -> setDefaultCategories 
    // .catch -> return error msg
    axios.get(`${URL}/category`)
    .then((res) => {
      // let allDefaultCate = []
      // const dataList = res.data["default categories"];
      // for (const data of dataList) {
      //   allDefaultCate.push(data);
      // }
      // setDefaultCategories(allDefaultCate);      
      setDefaultCategories(res.data["default categories"]);
      
    })
    .catch(() => {
      console.log("something wrong with get default categories!");
    })
  }

  const getUserCategories = (user_id) => {
    // axios call to get user categories
    // .then -> setUserCategories
    // .catch -> return err msg
    axios.get(`${URL}/${user_id}/category`, {params:{"month" : date.month, "year" : date.year}})
    .then((res) => {
      setUserCategories(res.data["user categories"]);
    })
    .catch(() => {
      console.log("something wrong with get user categories!");
    })
  }

  const getBudget = (user_id) => {
    // axios call to get budget
    // .then -> setBudget
    // .catch -> return err msg 
    axios.get(`${URL}/${user_id}/budget`,{params: {"month" : date.month, "year" : date.year}})
    .then((res) => {
      if ("amount" in res){
        setBudget(res.data["amount"])  
      }
    })
    .catch(() => {
      console.log("something wrong with get user budget!");
    })
  }


  const getExpenses = (user_id) => {
    // axios call to get expenses
    // .then -> setExpenses
    // .catch -> return .... 
    axios.get(`${URL}/${user_id}/expense`, {params: {"id": user.user_id, "month": date.month, "year": date.year}})
    .then((res) => {
      setExpenses(res.data["user expenses"])
    })
    .catch(() => {
      console.log("Something went wrong retrieving user expenses")
    })
  }

  const addExpense = (request_body) => {
    // key => amount, category_id, description, month, year
    // axios post with data in request body
    // .then -> newExpenses = getExpenses
    // newExpense = {'description': data.descript}
    // setExpenses({expenses..., newExpense})
    //          setExpenses(newExpenses)
    axios.post(`${URL}/${user.user_id}/expense`, request_body)
    .then((res) => {
      const newExpense = {
        "amount" : request_body.amount,
        "description" : res.data.description,
        "month" : request_body.month,
        "year" : request_body.year,
        "category_id" : request_body.category_id
      };
      setExpenses([...expenses, newExpense]);
    })
    .catch(() => {
      console.log("something wrong with add new expense!");
    })
  };

  
  const editExpense = (expense_id, request_body) => {
    // axios patch with expense id
    // .then -> setExpense ({expense})......
    axios.patch(`${URL}/expense/${expense_id}`, request_body)
    .then(() => {
      const modifiedExpenses = expenses.map((expense) => {
        if (expense.expense_id === expense_id){
          expense.description = request_body.description
          expense.amount = request_body.amount
        }
        return expense;
      });
      setExpenses(modifiedExpenses);
    })
    .catch(() => {
      console.log("something wrong with edit expense!");
    })
  };


  const addBudget = (request_body) => {
    // axios post with budget data in request body
    // .then -> setBudget
    axios.post(`${URL}/${user.user_id}/budget`, request_body)
    .then((res) => {
      const newBudget = {"amount": res.data["amount"], "month": request_body.month, "year": request_body.year}
      setBudget(newBudget)
    })
    .catch(() => {
      console.log("Something went wrong trying to set a new budget!")
    })
  };

  const editBudget = (request_body) => {
    // axios patch with budget data in req body
    // req body will have month, year, and amount
    // .then -> setBudget

    axios.patch(`${URL}/${user.user_id}/budget`, request_body)
    .then(()=> {
      setBudget({...budget, "amount":request_body["amount"]})
    })
    .catch(() => {
      console.log("Something went wrong editing the budget!")
    })
  };

  const changeMonth = (newMonth) => {
    setDate({...date, "month": newMonth});
    console.log("month changed!")
  };


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
        <Main 
        user={user}
        date={date}
        changeMonth={changeMonth}
        defaultCategories={defaultCategories}
        addExpense={addExpense}/>
      </div>
    );
  }
}

export default App;
