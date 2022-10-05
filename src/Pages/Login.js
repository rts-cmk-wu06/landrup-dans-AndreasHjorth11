import Hero from "../Components/Hero";
import LoginButton from "../Components/LogIndButton";
import "../index.css";

const Login = () => {
  return (
    <div className="relative overflow-hidden">
      <Hero image="splash-image.jpg" />
      <div>
        <div className="absolute w-[756px] h-[479px] bg-JapaneseViolet opacity-30 rotate-[-27.19deg] top-0 mt-[130px] ml-[-160px] z-10" />
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
          ></input>
          <input
            placeholder="Adgangskode"
            type="password"
            className="h-14 pl-5"
            id="inputID"
          ></input>
        </div>
        <div className="flex w-full absolute justify-center mt-[180px]">
          <div className="absolute text-center">
            <LoginButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
