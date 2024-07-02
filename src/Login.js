// // import React, { useState } from 'react'
// // import "./Login.css"
// // import {Link ,useHistory} from "react-router-dom";
// // import {auth} from "./Firebase"



// // function Login() {
// //     const history =useHistory();
// //     const [email,setEmail]=useState("");
// //     const [password,setPassword]=useState("");

// //     const login=e=>{
// //         e.preventDefault(); //login steps
// //         auth.SignInWithAndPassword(email,password)
// //         .then((auth)=>{
// //             history.push("/")
// //             //redirect home page
// //         } )
// //         .catch((e) => alert(e.message));

// //     const register=e=>{
// //         e.preventDefault(); //login steps
// //         auth.CreateUserWithAndPassword(email,password)
// //         .then((auth)=>{
// //             history.push("/")
// //             //redirect home page
// //         } )
// //         .catch((e) => alert(e.message));
// //     }
// //   return (
// //     <div className='login'>
        
// //         <Link to="/"> 
// //         <img className='login_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                
// //                 alt="">
// //         </img>
// //         </Link>
      
// //         <div className='login_container'>
// //             <h1> signin </h1>
// //             <form>
// //                 <h5> E-mail</h5>
// //                 <input value={email} onChange={event => setEmail(event.target.value)}type ="email" />
// //                 <h5> Password</h5>
// //                 <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
// //                 <button onClick={login} type="submit" className='login_signin'>Signin</button>
// //             </form>
// //                 <p>
                
// //                     By signing-in you agree to Amazon's Conditions of
// //                     see our Privacy Notice, our Cookies Notice and ou
// //                     Notice.
// //                 </p>
// //                 <button onClick={register} className='login_register'> Create your Amazon Account</button>
// //         </div>
// //     </div>
// //   )
// // }

// // }

// // export default Login;
// // // import React, { useState } from 'react';
// // // import "./Login.css";
// // // import { Link, Usehistory } from "react-router-dom";
// // // import { auth } from "./Firebase";

// // // function Login() {
// // //   const history = Usehistory();
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");

// // //   const login = e => {
// // //     e.preventDefault(); // login steps
// // //     auth.signInWithEmailAndPassword(email, password)
// // //       .then(auth => {
// // //         history.push("/"); // redirect home page
// // //       })
// // //       .catch(e => alert(e.message));
// // //   };

// // //   const register = e => {
// // //     e.preventDefault(); // registration steps
// // //     auth.createUserWithEmailAndPassword(email, password)
// // //       .then(auth => {
// // //         history.push("/"); // redirect home page
// // //       })
// // //       .catch(e => alert(e.message));
// // //   };

// // //   return (
// // //     <div className='login'>
// // //       <Link to="/"> 
// // //         <img 
// // //           className='login_logo' 
// // //           src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
// // //           alt="Amazon logo"
// // //         />
// // //       </Link>
// // //       <div className='login_container'>
// // //         <h1>Sign In</h1>
// // //         <form>
// // //           <h5>E-mail</h5>
// // //           <input 
// // //             value={email} 
// // //             onChange={event => setEmail(event.target.value)} 
// // //             type="email" 
// // //           />
// // //           <h5>Password</h5>
// // //           <input 
// // //             value={password} 
// // //             onChange={event => setPassword(event.target.value)} 
// // //             type="password" 
// // //           />
// // //           <button onClick={login} type="submit" className='login_signin'>Sign In</button>
// // //         </form>
// // //         <p>
// // //           By signing-in you agree to Amazon's Conditions of Use & Sale. 
// // //           Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
// // //         </p>
// // //         <button onClick={register} className='login_register'>Create your Amazon Account</button>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Login;
// import React, { useState } from 'react';
// import "./Login.css";
// import { Link, useNavigate } from "react-router-dom";
// import { auth } from "./Firebase";

// function Login() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const login = e => {
//     e.preventDefault(); // login steps
//     auth.signInWithEmailAndPassword(email, password)
//       .then(auth => {
//         navigate("/"); // redirect to home page
//       })
//       .catch(e => alert(e.message));
//   };

//   const register = e => {
//     e.preventDefault(); // registration steps
//     auth.createUserWithEmailAndPassword(email, password)
//       .then(auth => {
//         navigate("/"); // redirect to home page
//       })
//       .catch(e => alert(e.message));
//   };

//   return (
//     <div className='login'>
//       <Link to="/"> 
//         <img 
//           className='login_logo' 
//           src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
//           alt="Amazon logo"
//         />
//       </Link>
//       <div className='login_container'>
//         <h1>Sign In</h1>
//         <form>
//           <h5>E-mail</h5>
//           <input 
//             value={email} 
//             onChange={event => setEmail(event.target.value)} 
//             type="email" 
//           />
//           <h5>Password</h5>
//           <input 
//             value={password} 
//             onChange={event => setPassword(event.target.value)} 
//             type="password" 
//           />
//           <button onClick={login} type="submit" className='login_signin'>Sign In</button>
//         </form>
//         <p>
//           By signing-in you agree to Amazon's Conditions of Use & Sale. 
//           Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
//         </p>
//         <button onClick={register} className='login_register'>Create your Amazon Account</button>
//       </div>
//     </div>
//   );
// }

// export default Login;
import React, { useState } from 'react';
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./Firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = e => {
    e.preventDefault(); // login steps
    signInWithEmailAndPassword(auth, email, password)
      .then(auth => {
        navigate("/"); // redirect to home page
      })
      .catch(e => alert(e.message));
  };

  const register = e => {
    e.preventDefault(); // registration steps
    createUserWithEmailAndPassword(auth, email, password)
      .then(auth => {
        navigate("/"); // redirect to home page
      })
      .catch(e => alert(e.message));
  };

  return (
    <div className='login'>
      <Link to="/"> 
        <img 
          className='login_logo' 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Amazon logo"
        />
      </Link>
      <div className='login_container'>
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input 
            value={email} 
            onChange={event => setEmail(event.target.value)} 
            type="email" 
          />
          <h5>Password</h5>
          <input 
            value={password} 
            onChange={event => setPassword(event.target.value)} 
            type="password" 
          />
          <button onClick={login} type="submit" className='login_signin'>Sign In</button>
        </form>
        <p>
          By signing-in you agree to Amazon's Conditions of Use & Sale. 
          Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>
        <button onClick={register} className='login_register'>Create your Amazon Account</button>
      </div>
    </div>
  );
}

export default Login;
