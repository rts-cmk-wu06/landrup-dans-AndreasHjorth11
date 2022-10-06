import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Title from "../Components/Title";

const LargeUrl = "http://localhost:4000/file-bucket/1632381947468tango.jpg";

const Details = () => {
  const [activity, setActivity] = useState([]);
  const [description, setDescription] = useState([]);
  const [time, setTime] = useState([]);
  const [weekday, setWeekday] = useState([]);
  const [minAge, setMinAge] = useState([]);
  const [maxAge, setMaxAge] = useState([]);
  const [img, setImg] = useState();
  const [name, setName] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name };

    fetch("http://localhost:4000/api/v1/users/1/activities/1", {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjo3LCJ1c2VybmFtZSI6InVzZXIzIiwicGFzc3dvcmQiOiIkMmEkMTUkT01EVS44ZXRSaGY1N2ZEbVJudS9JdWhpbk5NUUpsSjh1amRVSm94RzRKWXZwdFVMNFdDZW0iLCJmaXJzdG5hbWUiOiJNYXJ0aW4iLCJsYXN0bmFtZSI6IlBvdWxzZW4iLCJhZ2UiOjIxLCJyb2xlIjoiZGVmYXVsdCIsImNyZWF0ZWRBdCI6IjIwMjEtMDktMjNUMDg6MTQ6MzAuNDA2WiIsInVwZGF0ZWRBdCI6IjIwMjEtMDktMjNUMDg6MTQ6MzAuNDA2WiJ9LCJpYXQiOjE2MzIzOTM0MTUsImV4cCI6MTYzMjM5NzAxNX0.WNiaflNk5_6tTOvIaNrOO9XkdG70ptBNt6sJIUBhlJg",
      },
    })
      .then((response) => console.log("Tilmeldt"))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/activities/1")
      .then((res) => {
        setActivity(res.data.name);
        setDescription(res.data.description);
        setTime(res.data.time);
        setWeekday(res.data.weekday);
        setMinAge(res.data.minAge);
        setMaxAge(res.data.maxAge);
      })
      .catch((err) => {});
  }, []);

  const fetchImage = async () => {
    const res = await fetch(LargeUrl);
    const imageBlob = await res.blob();
    const imageObjectUrl = URL.createObjectURL(imageBlob);
    setImg(imageObjectUrl);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div className="bg-JapaneseViolet w-full h-[800px] absolute">
      <div className="">
        <img src={img} className="h-[500px] object-cover relative" />
      </div>

      <div className="text-center flex justify-center">
        <div className="bg-JapaneseViolet w-[230px] h-[54px] rounded-xl font-bold text-lg absolute mt-[-80px] right-0 mr-6 drop-shadow-[0_9px_5px_rgba(0,0,0,0.35)]">
          <form onSubmit={handleSubmit}>
            <button className="mt-[11px] text-Plaster">Tilmeld</button>
          </form>
        </div>
      </div>

      <div className="ml-5 text-Plaster text-3xl mt-4">
        <h2>{activity}</h2>
      </div>

      <div className="">
        <div className="text-Plaster flex gap-2 ml-5 text-xl">
          <p>{minAge}</p>
          <p>-</p>
          <p>{maxAge}</p>
          <p>år</p>
        </div>
        <div>
          <div className="text-Plaster gap-2 ml-5 text-xl">
            <p>{weekday}</p>
            <p>{time}</p>
          </div>
        </div>
      </div>
      <div className="text-Plaster mt-10 ml-5">
        <p>{description}</p>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Details;
