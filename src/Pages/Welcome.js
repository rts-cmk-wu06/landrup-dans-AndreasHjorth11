import Hero from "../Components/Hero";
import Logo from "../Components/Logo";
import WelcomeButton from "../Components/WelcomeButton";

const Welcome = () => {
  return (
    <div className="relative">
      <Hero image="splash-image.jpg" />
      <div className="absolute mt-[-90%] ml-9">
        <Logo />
      </div>
      <div className="bg-red-500 text-center flex justify-center">
        <div className="mt-[-30%]">
          <WelcomeButton />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
