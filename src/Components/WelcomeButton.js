import { Link } from "react-router-dom";

const WelcomeButton = () => {
  return (
    <div>
      <Link to="/login">
        <div className="bg-JapaneseViolet w-[250px] h-[54px] rounded-xl font-bold text-lg animate-fade">
          <button className="mt-[11px] text-Plaster">Kom i gang</button>
        </div>
      </Link>
    </div>
  );
};

export default WelcomeButton;
