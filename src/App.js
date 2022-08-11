import "./App.css";
import Landing from "./components/Landing";
import Main from "./components/Main";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import axios from 'axios';
import { DefaultApi } from 'finnhub-ts';

function App() {
  const [user, setUser] = useState(null);
  const [date, setDate] = useState({'month': 8, 'year': 2022});
  const [defaultCategories, setDefaultCategories] = useState([]);
  const [userCategories, setUserCategories] = useState([]);
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [news,setNews] = useState(null);

  const FINNHUB_API_KEY = process.env.REACT_APP_FINNHUB_API_KEY;
  const finnhubClient = new DefaultApi({
      apiKey: FINNHUB_API_KEY,
      isJsonMime: (input) => {
        try {
          JSON.parse(input)
          return true
        } catch (error) {}
          return false
      },
  });

  const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  const handleCallbackResponse = (response) => {
    const userObject = jwt_decode(response.credential);
    handleUser(userObject);
  }

  const URL = "https://kashnote-server.herokuapp.com"

  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signIn"), {
      theme: "outline", 
      size: "large",
      width: "330px",
    });

    finnhubClient.marketNews("forex").then((resp) => {
      setNews(resp.data.slice(0,4));
    });

    getDate();
    getDefaultCategories();    
  }, []);

  useEffect(() => {
    if (date && user) {
      getExpenses(user.user_id);
      getBudget(user.user_id);
      getUserCategories(user.user_id);
    }
  }, [date, budget]);


  const getDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    setDate({...date, "month":month, "year":year})
  }


  const handleUser = (userObject) => {
    axios.get(`${URL}/user/${userObject.email}`)
    .then((res)=>{
      setUser(res.data);
      return res.data;
    })
    .catch((err)=>{
      console.log(err.response);
      axios.post(`${URL}/user`, userObject)
      .then((res) => {
        const newUser = {"user_id": res.data.user_id,"email": userObject.email, "name": userObject.name};
        setUser(newUser);
        return newUser;
    })
      .catch(() => {
        console.log("Error posting a new user")
      })
    })
    .then((userFromResponse) => {
      getUserCategories(userFromResponse.user_id);
      getBudget(userFromResponse.user_id);
      getExpenses(userFromResponse.user_id);
    })
    .catch((err) => {
      console.log(err.response);
    })
  }


  const getDefaultCategories = () => {
    axios.get(`${URL}/category`)
    .then((res) => {    
      setDefaultCategories(res.data["default categories"]);
      
    })
    .catch(() => {
      console.log("something wrong with get default categories!");
    })
  }


  const getUserCategories = (user_id) => {
    axios.get(`${URL}/${user_id}/category`, {params:{"month" : date.month, "year" : date.year}})
    .then((res) => {
      setUserCategories(res.data["user categories"]);
    })
    .catch(() => {
      console.log("something wrong with get user categories!");
    })
  }


  const getBudget = (user_id) => {
    axios.get(`${URL}/${user_id}/budget`,{params: {"month" : date.month, "year" : date.year}})
    .then((res) => {
      if ("msg" in res.data) {
        setBudget(0)
      }else {
      setBudget(res.data.amount);
      }
    })
    .catch(() => {
      console.log("something wrong with get user budget!");
    })
  }


  const getExpenses = (user_id) => {
    axios.get(`${URL}/${user_id}/expense`, {params: {"id": user_id, "month": date.month, "year": date.year}})
    .then((res) => {
      setExpenses(res.data["user expenses"])
    })
    .catch(() => {
      console.log("Something went wrong retrieving user expenses")
    })
  }

  const addExpense = (request_body) => {
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


  const getMonthExpenseTotal = () => {
    let total = 0
    for (let expense of expenses) {
      total += parseFloat(expense.amount);
    }
    return total.toFixed(2);
  }

// Will use this function later when we add more feature after capstone for personal project
  // const editExpense = (expense_id, request_body) => {
  //   axios.patch(`${URL}/expense/${expense_id}`, request_body)
  //   .then(() => {
  //     const modifiedExpenses = expenses.map((expense) => {
  //       if (expense.expense_id === expense_id){
  //         expense.description = request_body.description
  //         expense.amount = request_body.amount
  //       }
  //       return expense;
  //     });
  //     setExpenses(modifiedExpenses);
  //   })
  //   .catch(() => {
  //     console.log("something wrong with edit expense!");
  //   })
  // };


  const addBudget = (request_body) => {
    axios.post(`${URL}/${user.user_id}/budget`, request_body)
    .then((res) => {
      const newBudget = {"amount": res.data["amount"], "month": request_body.month, "year": request_body.year}
      setBudget(newBudget.amount);
    })
    .catch((err) => {
      console.log("Something went wrong trying to set a new budget!")
      console.log(err.response)
    })
  };


  const editBudget = (request_body) => {
    axios.patch(`${URL}/${user.user_id}/budget`, request_body)
    .then(()=> {
      setBudget(request_body["amount"])
    })
    .catch(() => {
      console.log("Something went wrong editing the budget!")
    })
  };


  const changeMonth = (newMonth) => {
    setDate({...date, "month": newMonth});
  };


  const addUserCategory = (request_body) => {
    axios.post(`${URL}/${user.user_id}/category`, request_body)
    .then((res) => {
      const newUserCategory = {
        "title" : request_body.title,
        "month" : request_body.month,
        "year" : request_body.year,
        "category_id" : res.id
      };
      setUserCategories([...userCategories, newUserCategory]);
    })
    .catch(() => {
      console.log("something wrong with add new user category!");
    })
  }


  if (user === null) {
    return (
      <div>
        <Landing news={news}/>
      </div>
    );
  } else {
    return (
      <div>
        <Main 
        user={user}
        date={date}
        expenses={expenses}
        changeMonth={changeMonth}
        defaultCategories={defaultCategories}
        userCategories={userCategories}
        addExpense={addExpense}
        editBudget={editBudget}
        addBudget={addBudget}
        budget={budget}
        getExpenseTotal={getMonthExpenseTotal}
        addUserCategory={addUserCategory}
        />    
      </div>
    );
  }
}

export default App;
