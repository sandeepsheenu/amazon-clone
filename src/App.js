// import React from "react";
// import './App.css';
// import {BrowserRouterr as Router,Switch, Route} from "react-router-dom" ;
  
// function App() {
//   return (
//     <Router>
//     <div className="app">
//      <Switch>
//       <Route path="/checkout">
//       <h1> Checkout</h1>
//       </Route>
//       <Route path="/Login">
//       <h1> Login</h1>
//       </Route>
//       <Route path="/">
//       <h1> Home Page</h1>
//       </Route>

//      </Switch>
//     </div>  
//     </Router>
//   );
// }

// export default App;
import React, { useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import  UseStateValue  from "./StateProvider";
import { auth } from "./Firebase";



const Main = () => {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

const Checkoutpage=()=>{
  return (
    <>
      <Header />
      <Checkout/>
    </>
  );
}

function App() {
  const[{user},dispatch]=UseStateValue();
  useEffect(()=>{
       const unsubscribe = auth.onAuthStateChanged((authUser)=>{
          if (authUser){
                  //useer logged in
                  dispatch({
                    type:"SET_USER",
                    user:authUser
                  });
          }else{
            dispatch({
              type:"SET_USER",
              user:null,
            });
          }
        }) ;
        return()=>{
          //cleaning process
          unsubscribe();
        }
  },[])

  console.log(user)
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout/" element={<Checkoutpage/>} />
          <Route path="/login" element={<Login/>} />
          
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

