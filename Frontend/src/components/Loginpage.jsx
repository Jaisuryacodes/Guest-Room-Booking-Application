import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "./UserContext";

const Loginpage = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [redirect, setredirect] = useState("");
  const [status, setstatus] = useState("");
  const { setUser } = useContext(UserContext);
  function Login(ev) {
    ev.preventDefault();
    axios
      .post("/Login", { email, password })
      .then((res) => {
        setstatus(res.data.msg);
        setUser(res.data);
     
        if (res.data.msg == "Login successful") {
          setTimeout(() => {
            if (res.data.Type == "customer") {
              setredirect("/Customer");
            } else {
              setredirect("/HouseOwner");
            }
          }, 1000);
        }
      })
      .catch((err) => {
        alert("Try again");
      });
  }
  
  if (redirect) {
    // setredirect(true);
    return <Navigate to={redirect} />;
  }
 
  return (
    <>
      <div className=" flex  flex-col justify-between  items-center  text-[24px]  ">
        <div className="login page flex flex-col mt-[5%] mb-[10%] justify-center align-middle items-center font-semibold  text-[#0c0c0c] rounded-md gap-4 border-[1px]  border-[#c6bebe] w-[400px] ">
          <Link
            className=" z-40  text-[24px] bg-[#009933] hover:bg-[#cc0700] rounded-sm px-3 text-white ml-auto"
            to="/"
          >
            X
          </Link>
          <h1 className=" mt-6">Welcome</h1>
          <form
            onSubmit={Login}
            className=" flex flex-col gap-[12px] items-center  text-[16px] text-[#0c0c0c]  "
          >
            <input
              className="bg-transparent outline-none p-2 border-[1px] border-[#0c0c0c]  placeholder:text-[#111111]"
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(ev) => setemail(ev.target.value)}
            />
            <input
              className="bg-transparent outline-none p-2 border-[1px] border-[#0c0c0c]  placeholder:text-[#111111]"
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(ev) => setpassword(ev.target.value)}
            />
            <div className=" text-[12px] font-medium">
              <div className=" flex gap-4 justify-center align-middle items-center  font-medium mt-4">
                {" "}
                <span className="underline decoration-[#46eada] text-[14px]  ">
                  <Link to="/forgetpassword">Forget Password?</Link>
                </span>
                <h1>
                  No Account ?
                  <span className="underline decoration-violet-700 text-[16px]  ">
                    <Link to="/Signup">Register</Link>
                  </span>{" "}
                </h1>
              </div>
              <button className=" text-[24px] mt-4 bg-[#009933] hover:bg-[#00cc44] rounded-sm p-1 text-white mb-5 ">
                Login
              </button>
            </div>
            <p>{status} </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Loginpage;
