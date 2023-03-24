import React from "react";
import Events from "../components/Events";
import UsersList from "../components/UsersList";
import userPhoto from '../assets/images/userPhoto.svg';

const AdminForums = () => {
  const dataUsers = [
    {
      id: 1,
      imgUrl: userPhoto,
      fullName: "Чак Норрис",
      email: "david@gmail.com",
      phoneNumber: "+996709123456",
      isBlocked: false,
    },
    {
      id: 2,
      imgUrl: userPhoto,
      fullName: "Джими О Йанг",
      email: "linda@gmail.com",
      phoneNumber: "+99676599999",
      isBlocked: true,
    },
    {
      id: 3,
      imgUrl: userPhoto,
      fullName: "Спанч Боб",
      email: "spanchbob@gmail.com",
      phoneNumber: "+99670945645",
      isBlocked: true,
    },
    {
      id: 4,
      imgUrl: userPhoto,
      fullName: "Принц Саудии",
      email: "prince@gmail.com",
      phoneNumber: "+99670456456",
      isBlocked: true,
    },
    {
      id: 5,
      imgUrl: userPhoto,
      fullName: "Диана Грег",
      email: "diana@gmail.com",
      phoneNumber: "+996709655555",
      isBlocked: false,
    },
    {
      id: 6,
      imgUrl: userPhoto,
      fullName: "Ханна Раппопорт",
      email: "henna@gmail.com",
      phoneNumber: "+99670000000",
      isBlocked: true,
    },
    {
      id: 7,
      imgUrl: userPhoto,
      fullName: "Эльза Шиф",
      email: "elsa@gmail.com",
      phoneNumber: "+9967345455",
      isBlocked: false,
    },
    {
      id: 8,
      imgUrl: userPhoto,
      fullName: "Эвелина Леви",
      email: "evelina@gmail.com",
      phoneNumber: "+996709123456",
      isBlocked: false,
    },
    {
      id: 9,
      imgUrl: userPhoto,
      fullName: "Ланг Имбер",
      email: "lang@gmail.com",
      phoneNumber: "+9967345354",
      isBlocked: false,
    },
    {
      id: 10,
      imgUrl: userPhoto,
      fullName: "Спанч Боб",
      email: "spanchbob@gmail.com",
      phoneNumber: "+99673748573",
      isBlocked: false,
    },
    {
      id: 11,
      imgUrl: userPhoto,
      fullName: "Спанч Боб",
      email: "spanchbob@gmail.com",
      phoneNumber: "+99655333343",
      isBlocked: true,
    },
    {
      id: 12,
      imgUrl: userPhoto,
      fullName: "Спанч Боб",
      email: "spanchbob@gmail.com",
      phoneNumber: "+996723672362",
      isBlocked: true,
    },
    {
      id: 13,
      imgUrl: userPhoto,
      fullName: "Спанч Боб",
      email: "spanchbob@gmail.com",
      phoneNumber: "+996709123400",
      isBlocked: false,
    },
    {
      id: 14,
      imgUrl: userPhoto,
      fullName: "Спанч Боб",
      email: "spanchbob@gmail.com",
      phoneNumber: "+996709654321",
      isBlocked: false,
    },
  ];
  const dataEvents = [
    {
        id: 1, 
        title: 'Менторство',
        status: 'Закрыт',
        deadline: '03.02.2023',
        city: 'Нарын'
    },
    {
        id: 2, 
        title: 'Как работает наша система?',
        status: 'Закрыт',
        deadline: '03.02.2023',
        city: 'Ош'
    },
    {
        id: 3, 
        title: 'Кухня',
        status: 'Открыт',
        deadline: '03.02.2023',
        city: 'Бишкек'
    }
  ]
  return (
    <div>
      <Events data={dataEvents} event={'forums'}/>
      <UsersList data={dataUsers} />
    </div>
  );
};

export default AdminForums;
