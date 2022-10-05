import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <div>
      <Link to="/aktiviteter">
        <div className="bg-JapaneseViolet w-[250px] h-[54px] rounded-xl font-bold text-lg animate-fade drop-shadow-[0_9px_5px_rgba(0,0,0,0.35)]">
          <button className="mt-[11px] text-Plaster">Log Ind</button>
        </div>
      </Link>
    </div>
  );
};

export default LoginButton;
