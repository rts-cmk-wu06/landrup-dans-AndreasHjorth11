import { Link } from "react-router-dom";

const WelcomeButton = () => {
    return ( <div>
        <div className="bg-JapaneseViolet w-[250px] h-[54px] rounded-xl font-bold text-lg animate-fade">
          <Link to='/aktiviteter'>
            <button className="mt-[11px] text-Plaster">Kom i gang</button>
          </Link>
        </div>
    </div> );
}
 
export default WelcomeButton;