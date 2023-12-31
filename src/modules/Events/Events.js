import React from "react";
import stars from './assets/images/stars.svg'
import computer from './assets/images/computer.svg'
import Button from "./Button/Button";

const Events = ({ title, imgSource, eventName, description, time, date, location }) => {
  return (
    <div className="pb-20">
      <div className="relative pt-20 w-[95%] mx-auto pb-[4%]">
        <h2 className="text-[#662D91] font-semibold text-[clamp(2.2rem,_2.78vw,_2.8rem)] text-center">
          {title}
        </h2>
        <img src={computer} alt="computer" className="absolute left-0 top-[50%] w-[20%]"/>
      </div>
      <div className="myWrapper flex justify-between items-center">
        <div className="basis-1/2 flex flex-col gap-8">
          <p className="text-[#9960C3] font-bold text-[clamp(2.2rem,_2.5vw,_2.5rem)]">
            {eventName}
          </p>
          <div className="text-[clamp(.8rem,_1.1vw,_1.3rem)] flex flex-col gap-2">
            <div className="text-[#9E7CB8]">
              <p>
                <span className="font-bold">Дата:</span> {date}{" "}
              </p>
              <p>
                <span className="font-bold">Время:</span> {time}
              </p>
              <p>
                <span className="font-bold">Локация:</span> {location}
              </p>
            </div>
            <div className="text-[#403A64] font-normal">
              {description}
            </div>
          </div>
          <div className="flex gap-2">
            <Button where={'/'} text={'Подать заявку'} className={'text-[#662D91] bg-[#E8E5FF]'}/>
            <Button where={'/'} text={'Подробнее'} className={'text-[#662D91]'}/>
          </div>
        </div>
        <div className="basis-1/2 relative w-fit">
          <img src={stars} alt="stars" className="absolute -top-[25%] right-0 left-[15%] w-[10%] mx-auto" />
          <img
            src={imgSource}
            alt="girls"
            loading="lazy"
            className="w-[85%] ml-auto min-w-[320px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
