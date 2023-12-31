import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import videoPhoto from "../assets/images/video-photo.svg";
import axios from "axios";

const Input = ({ label, ...props }) => {
  return (
    <div
      className="border-[#9960C3] border-2 rounded-[8px] relative w-full "
      {...props}
    >
      <input type={"text"} className="p-4 pb-1 pl-1 w-full" id="link" />
      <label
        htmlFor="link"
        className="text-[#79768D] font-medium text-[0.75rem] absolute top-0 left-1"
      >
        {label}
      </label>
    </div>
  );
};

const AddVideo = () => {
  const [category, setCategory] = useState("Здоровье");
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState("");
  const [lecturerName, setLecturerName] = useState("");
  const [lecturerInfo, setLecturerInfo] = useState("");

    const handleSave = () => {
        const newVideoBlog = {
            videoUrl,
            title,
            description,
            lecturerName
        }
        axios.post("https://girls4girls.herokuapp.com/api/video-blog/post", newVideoBlog).then(res => console.log(res))
    }

  return (
    <div className="w-[60%]">
      <h2 className="text-[#000000] font-semibold">Название видеоурока</h2>
      <div className="flex flex-col gap-3">
        <div className="h-[200px]">
          {!videoUrl ? (
            <img src={videoPhoto} alt="video photo" />
          ) : (
            <iframe
              width="100%"
              height="100%"
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}
        </div>
        <Input label={"Ссылка"} onChange={(e) => setVideoUrl(e.target.value)} value={videoUrl}/>
        <Input label={"Название"} onChange={(e) => setTitle(e.target.value)} value={title}/>
        <div
          className="flex justify-between border rounded-[8px] px-1 py-4 pb-1  border-[#9960C3] hover:cursor-pointer relative"
          onClick={() => setCategoryOpen(!categoryOpen)}
        >
          <p>{category}</p>
          <label className="absolute top-0 left-1 text-[#79768D] font-medium text-[0.75rem]">
            Категория
          </label>
          <ArrowDropDownIcon className="text-[#9960C3]" />
          <div
            className={`bg-[#9960C3] text-white rounded-[5px] px-4 py-2 ${
              !categoryOpen
                ? `hidden`
                : "absolute z-10 flex flex-col justify-between"
            }`}
          >
            <p onClick={() => setCategory("Здоровье")}>Здоровье</p>
            <p onClick={() => setCategory("Образование")}>Образование</p>
            <p onClick={() => setCategory("Кухня")}>Кухня</p>
          </div>
        </div>
        <div className="relative w-full">
          <textarea
            className="border-[#9960C3] p-4 pb-1 pl-1 border-2 rounded-[8px] w-full"
            cols={"30"}
            rows={"8"}
            onChange={(e) => setDescription(e.target.value)} value={description}
          ></textarea>
          <label className="absolute top-1 left-1 text-[#79768D] font-medium text-[0.75rem]">
            Описание
          </label>
        </div>
        <Input label={"Лектор"} onChange={(e) => setLecturerName(e.target.value)} value={lecturerName}/>
        <Input label={"Информация о лекторе"} onChange={(e) => setLecturerInfo(e.target.value)} value={lecturerInfo}/>
        <div className="flex gap-6">
          <button
            type="button"
            className="rounded-[8px] bg-[#9960C3] text-white p-2" onClick={handleSave}
          >
            Сохранить
          </button>
          <button
            type="button"
            className="rounded-[8px] bg-[transparent] text-[#9960C3] border border-[#9960C3] p-2"
          >
            Добавить тест
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddVideo;
