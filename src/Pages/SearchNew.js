import { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import { Link } from "react-router-dom";

import { FiSearch } from "react-icons/fi";

import Title from "../Components/Title";
import Footer from "../Components/Footer";

const LargeUrl = "http://localhost:4000/file-bucket/1632381947468tango.jpg";
const LargeUrl2 = "http://localhost:4000/file-bucket/1632382020024fitnessdance.jpg";

export default function Search() {
  const [APIData, setAPIData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    axios.get(`http://localhost:4000/api/v1/activities`).then((response) => {
      setAPIData(response.data);
    });
  }, []);

//   const [activity, setActivity] = useState([]);
//   const [activity2, setActivity2] = useState([]);
//   const [minAge, setMinAge] = useState([]);
//   const [minAge2, setMinAge2] = useState([]);
//   const [maxAge, setMaxAge] = useState([]);
//   const [maxAge2, setMaxAge2] = useState([]);
  const [img, setImg] = useState();
  const [img2, setImg2] = useState();

//   useEffect(() => {
//     axios
//       .get("http://localhost:4000/api/v1/activities/1")
//       .then((res) => {
//         setActivity(res.data.name);
//         setMinAge(res.data.minAge);
//         setMaxAge(res.data.maxAge);
//       })
//       .catch((err) => {});
//   }, []);

//   useEffect(() => {
//     axios
//       .get("http://localhost:4000/api/v1/activities/2")
//       .then((res) => {
//         setActivity2(res.data.name);
//         setMinAge2(res.data.minAge);
//         setMaxAge2(res.data.maxAge);
//       })
//       .catch((err) => {});
//   }, []);

  const fetchImage = async () => {
    const res = await fetch(LargeUrl);
    const imageBlob = await res.blob();
    const imageObjectUrl = URL.createObjectURL(imageBlob);
    setImg(imageObjectUrl);
  };

  const fetchImage2 = async () => {
    const res = await fetch(LargeUrl2);
    const imageBlob = await res.blob();
    const imageObjectUrl = URL.createObjectURL(imageBlob);
    setImg2(imageObjectUrl);
  };

  useEffect(() => {
    fetchImage();
    fetchImage2();
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = APIData.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(APIData);
    }
  };
  return (
    <div className="bg-JapaneseViolet w-full h-[800px] absolute overflow-x-auto">
      <div className="mt-10 ml-10">
        <Title text="Søg" />
      </div>
      <div className="flex justify-center mt-10 items-center">
        <div className="">
          <form>
            <input
              icon="search"
              placeholder=""
              className="h-[48px] w-[356px] bg-ExplosiveGrey opacity-30 relative pl-5 text-white"
              onChange={(e) => searchItems(e.target.value)}
            />
          </form>
        </div>
        <div className="text-white text-2xl absolute right-0 mr-12">
          <FiSearch />
        </div>
      </div>
      <div itemsPerRow={3} style={{ marginTop: 20 }}>
        {searchInput.length > 1
          ? filteredResults.map((item) => {
              return (
                <div className="">
                  <div>
                  <Link to="#">
                      <div className="flex justify-center mt-[30px] mb-[96px]">
                        <div className="w-[356px] h-[344px] relative">
                          <img src={img}
                            className="h-[120%] w-[100%] object-cover rounded-tr-[39px] rounded-tl-[39px] rounded-bl-[39px] z-0"
                          ></img>

                          <div className="w-full h-[100px] bg-HerbRobert mt-[-100px] z-10 absolute rounded-tr-[39px] rounded-tl-[0] rounded-bl-[39px] opacity-80"></div>
                          <div className="text-Plaster absolute mt-[-80px] ml-[20px] z-20 text-[18px] font-normal font-Roboto">
                            {item.name}
                            <br />
                            <div className="flex gap-1">
                              {item.minAge}
                              <p>-</p>
                              {item.maxAge}
                              <p>år</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })
          : APIData.map((item) => {
              return (
                <div className="">
                  <div>
                    <Link to="#">
                      <div className="flex justify-center mt-[30px] mb-[96px]">
                        <div className="w-[356px] h-[344px] relative">
                          <img src={img}
                            className="h-[120%] w-[100%] object-cover rounded-tr-[39px] rounded-tl-[39px] rounded-bl-[39px] z-0"
                          ></img>

                          <div className="w-full h-[100px] bg-HerbRobert mt-[-100px] z-10 absolute rounded-tr-[39px] rounded-tl-[0] rounded-bl-[39px] opacity-80"></div>
                          <div className="text-Plaster absolute mt-[-80px] ml-[20px] z-20 text-[18px] font-normal font-Roboto">
                            {item.name}
                            <br />
                            <div className="flex gap-1">
                              {item.minAge}
                              <p>-</p>
                              {item.maxAge}
                              <p>år</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                    {/* <div className="text-white">{item.name}</div>
                    <div>{item.minAge}</div>
                    <div>{item.maxAge}</div> */}
                  </div>
                </div>
              );
            })}
            <div className="mb-10 h-10 w-full"></div>
            <Footer/>
      </div>
    </div>
  );
}
