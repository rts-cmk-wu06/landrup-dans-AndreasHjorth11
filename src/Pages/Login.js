import { AuthContext } from "../Context/Authcontext";
import { createRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState, useEffect, useContext } from "react";
import Hero from "../Components/Hero";
// import LoginButton from "../Components/LogIndButton";
import "../index.css";

const Login = () => {
  let { setIsAuthticated } = useContext(AuthContext);
  let navigate = useNavigate();
  let username = createRef();
  let password = createRef();

  const handleLogin = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/auth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `username=${username.current.value}&password=${password.current.value}`,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          setLoginError(true);
          throw new Error("unauthorized");
        }
      })
      .then((data) => {
        console.log(data);
        setIsAuthticated(data.token);

        navigate("/aktiviteter");
      })
      .catch((error) => console.log(error));
  };

  const [loginError, setLoginError] = useState(undefined);

  return (
    <div className="relative overflow-hidden">
      <Hero image="splash-image.jpg" />
      <div>
        <div className="absolute w-[756px] h-[479px] bg-JapaneseViolet opacity-30 rotate-[-27.19deg] top-0 mt-[130px] ml-[-160px] z-10 animate-fade" />
      </div>
      <div className="w-full h-52  z-20 absolute mt-[-530px] flex">
        <div className="w-full absolute">
          <h2 className="ml-[40px] mt-[-30px] text-5xl text-white">Log ind</h2>
        </div>
        <div className="grid grid-rows-4 grid-flow-col gap-[70px] mt-10 w-[80%] ml-10">
          <input
            placeholder="Brugernavn"
            type="text"
            className="h-14 pl-5 "
            id="inputID"
            ref={username}
          ></input>
          <input
            placeholder="Adgangskode"
            type="password"
            className="h-14 pl-5"
            id="inputID"
            ref={password}
          ></input>
        </div>
        <div className="flex w-full absolute justify-center mt-[180px]">
          <div className="absolute text-center">
            <Link to="/aktiviteter">
              <div className="bg-JapaneseViolet w-[250px] h-[54px] rounded-xl font-bold text-lg animate-fade drop-shadow-[0_9px_5px_rgba(0,0,0,0.35)]">
                <button onClick={(e) => handleLogin(e)} className="mt-[11px] text-Plaster">Log Ind</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
