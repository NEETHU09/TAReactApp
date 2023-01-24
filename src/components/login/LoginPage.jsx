import React, { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import axios from "axios";
import { AuthService } from "../../service/authenticationService";
import { constant } from "../../configuration/constants";

export default function LoginPage() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [userRole, setUserRole] = useState(null);
  const [userLogin, setUserLogin] = React.useState({});

  useEffect(() => {
    Login();
  }, []);

  const Login = async(loginData) => {
    await AuthService.authenticateUser(loginData).then(res => {
        setUserLogin(res);
        console.log("res: ", res)
        // sessionStorage.setItem(JSON.stringify(data.username));
        // navigate("/home")

        if (res?.message == constant.Authorized) {
        //   navigate("/home");
        console.log("dashboard");
        }
        else if (res?.message == constant.User) {
            console.log("user")
        }
        else {
        //   setErrorOpen(true)
        //   navigate("/");
        console.log("login")
        }
      });
    
    console.log("loginData from LoginPage", loginData);
    // if (loginData) {
    //   axios.post(`${url}`, loginData).then((res) => {
    //     setUser({ email: loginData.email, password: loginData.password });
    //     const result = res.data;
    //     if (result.role) {
    //       setUserRole(result.role);
    //     } else {
    //       console.log("Error");
    //     }
    //   });
    // }
  };

//   const Logout = () => {
//     setUser({
//       email: "",
//       password: "",
//     });
//   };

  return (
    <div>
      {/* {user.email && user.password ? (
        <div className="welcome">
          {userRole === "admin" ? (
            <div> */}
              {/* <LandingPage /> */}
              {/* Welcome to Dashboard Page
              <button onClick={Logout}>Logout</button>
            </div>
          ) : (
            <div> */}
              {/* <UserPage /> */}
              {/* Welcome to User Page */}
              {/* <button onClick={Logout}>Logout</button>
            </div>
          )}
        </div>
      ) : (
        <div> */}
          <LoginForm Login={Login} />
        {/* </div>
      )} */}
    </div>
  );
}



// Bkp
// import React, { useState, useEffect } from "react";
// import LoginForm from "./LoginForm";
// import axios from "axios";

// export default function LoginPage() {
//   const [user, setUser] = useState({ email: "", password: "" });
//   const [userRole, setUserRole] = useState(null);

//   const url = "http://localhost:8080/login";

//   useEffect(() => {
//     Login();
//   }, []);

//   const Login = (loginData) => {
//     console.log("loginData from LoginPage", loginData);
//     if (loginData) {
//       axios.post(`${url}`, loginData).then((res) => {
//         setUser({ email: loginData.email, password: loginData.password });
//         const result = res.data;
//         if (result.role) {
//           setUserRole(result.role);
//         } else {
//           console.log("Error");
//         }
//       });
//     }
//   };

//   const Logout = () => {
//     setUser({
//       email: "",
//       password: "",
//     });
//   };

//   return (
//     <div>
//       {user.email && user.password ? (
//         <div className="welcome">
//           {userRole === "admin" ? (
//             <div>
//               {/* <LandingPage /> */}
//               Welcome to Dashboard Page
//               <button onClick={Logout}>Logout</button>
//             </div>
//           ) : (
//             <div>
//               {/* <UserPage /> */}
//               Welcome to User Page
//               <button onClick={Logout}>Logout</button>
//             </div>
//           )}
//         </div>
//       ) : (
//         <div>
//           <LoginForm Login={Login} />
//         </div>
//       )}
//     </div>
//   );
// }
