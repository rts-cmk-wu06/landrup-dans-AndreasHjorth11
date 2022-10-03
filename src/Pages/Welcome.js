import Hero from "../Components/Hero";
import Logo from "../Components/Logo";

const Welcome = () => {
  return (
    <div className="relative">
      <Hero image="splash-image.jpg" />
      <div className="absolute mt-[-90%] ml-7">
        <Logo />
      </div>
    </div>
  );
};

export default Welcome;
