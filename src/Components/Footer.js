import { FiHome } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="">
      <div className="w-full h-[66px] bottom-0 bg-Plaster fixed z-50 flex items-center ">
        <div className="flex justify-evenly w-full gap-9">
          <div className="border-2 border-black text-2xl rounded-full w-10 h-10 pl-[1.4%] pt-1">
            <FiHome />
          </div>
          <div className="border-2 border-black text-2xl rounded-full w-10 h-10 pl-[1.5%] pt-1">
            <FiSearch />
          </div>
          <div className="border-2 border-black text-2xl rounded-full w-10 h-10 pl-[1.5%] pt-1">
            <FiCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
