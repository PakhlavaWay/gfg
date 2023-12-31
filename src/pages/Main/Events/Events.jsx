import React from "react";
import DetailsButton from "../../../UI/DetailsButton/DetailsButton";
import MySlider from '../../../helpers/swiper/MySlider';
import firstFutureE from "./assets/images/firstFutureE.png";
import secondFutureE from "./assets/images/secondFutureE.png";
import thirdFutureE from "./assets/images/thirdFutureE.png";
import firstPastE from "./assets/images/firstPastE.png"
import secondPastE from "./assets/images/secondPastE.png";
import thirdPastE from "./assets/images/thirdPastE.png";

const data = {
  futureEvents: [
    {
      img: firstFutureE,
      title: "Выпуск менти 1 потока",
    },
    {
      img: secondFutureE,
      title: "Книжный марафон",
    },
    {
      img: thirdFutureE,
      title: "Челлендж неделя",
    },
    {
      img: thirdFutureE,
      title: "Выпуск менти 1 потока",
    },
    {
      img: thirdFutureE,
      title: "Выпуск менти 1 потока",
    },
    {
      img: thirdFutureE,
      title: "Выпуск менти 1 потока",
    },
  ],
  pastEvents: [
    {
      img: firstPastE,
      title: "Выпуск менти 1 потока",
    },
    {
      img: secondPastE,
      title: "Челледж неделя",
    },
    {
      img: thirdPastE,
      title: "Книжный марафон",
    },
    {
      img: thirdPastE,
      title: "Выпуск менти 1 потока",
    },
    {
      img: thirdPastE,
      title: "Выпуск менти 1 потока",
    },
    {
      img: thirdPastE,
      title: "Выпуск менти 1 потока",
    },
  ],
};

export const FutureEvents = () => {
  return (
    <section className="py-20 events">
      <div>
        <div className="myWrapper pb-16">
          <h2 className="mySubtitle text-center future-events-title">
            Предстоящие события
          </h2>
        </div>
        <MySlider events={data.futureEvents} />
        <DetailsButton className="mx-auto mt-14" text="Узнать подробнее" />
      </div>
    </section>
  );
};

export const PastEvents = () => {
  return (
    <section className="pb-20">
      <div>
        <div className="myWrapper pb-16">
          <h2 className="mySubtitle text-center future-events-title">
            Прошедшие события
          </h2>
        </div>
        <MySlider events={data.pastEvents} />
        <DetailsButton text="Узнать подробнее" className="mx-auto mt-14" />
      </div>
    </section>
  );
};
