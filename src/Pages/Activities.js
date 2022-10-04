import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Title from "../Components/Title";
import Footer from "../Components/Footer";

const LargeUrl = "http://localhost:4000/file-bucket/1632381947468tango.jpg";
const LargeUrl2 = "http://localhost:4000/file-bucket/1632382020024fitnessdance.jpg";

const Activities = () => {
  const [activity, setActivity] = useState([]);
  const [activity2, setActivity2] = useState([]);
  const [minAge, setMinAge] = useState([]);
  const [minAge2, setMinAge2] = useState([]);
  const [maxAge, setMaxAge] = useState([]);
  const [maxAge2, setMaxAge2] = useState([]);
  const [img, setImg] = useState();
  const [img2, setImg2] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/activities/1")
      .then((res) => {
        setActivity(res.data.name);
        setMinAge(res.data.minAge);
        setMaxAge(res.data.maxAge);
      })
      .catch((err) => {});
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/activities/2")
      .then((res) => {
        setActivity2(res.data.name);
        setMinAge2(res.data.minAge);
        setMaxAge2(res.data.maxAge);
      })
      .catch((err) => {});
  }, []);

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

  return (
    <div className="bg-JapaneseViolet w-full h-[800px] absolute overflow-x-auto">
      <div className="mt-10 ml-10">
        <Title text="Aktiviteter" />
      </div>
      <div className="mt-10">
        <Link to="#">
          <div className="flex justify-center">
            <div className="w-[356px] h-[344px] relative">
              <img
                src={img}
                className="h-[120%] w-[100%] object-cover rounded-tr-[39px] rounded-tl-[39px] rounded-bl-[39px] z-0"
              />

              <div className="w-full h-[100px] bg-HerbRobert mt-[-100px] z-10 absolute rounded-tr-[39px] rounded-tl-[0] rounded-bl-[39px] opacity-80"></div>
              <div className="text-Plaster absolute mt-[-80px] ml-[20px] z-20 text-[18px] font-normal font-Roboto">
                {activity}
                <br />
                <div className="flex gap-1">
                  {minAge}
                  <p>-</p>
                  {maxAge}
                  <p>år</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className="mt-[100px] mb-[160px]">
          <Link to="#">
            <div className="flex justify-center mb-0">
              <div className="w-[356px] h-[344px] relative">
                <img
                  src={img2}
                  className="h-[120%] w-[100%] object-cover rounded-tr-[39px] rounded-tl-[39px] rounded-bl-[39px] z-0"
                />

                <div className="w-full h-[100px] bg-HerbRobert mt-[-100px] z-10 absolute rounded-tr-[39px] rounded-tl-[0] rounded-bl-[39px] opacity-80"></div>
                <div className="text-Plaster absolute mt-[-80px] ml-[20px] z-20 text-[18px] font-normal font-Roboto">
                  {activity2}
                  <br />
                  <div className="flex gap-1">
                    {minAge2}
                    <p>-</p>
                    {maxAge2}
                    <p>år</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        
        <div>
            <Footer />
        </div>

        </div>
      </div>
    </div>
  );
};

export default Activities;
