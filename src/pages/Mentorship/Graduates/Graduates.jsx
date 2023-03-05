import React from 'react'
import line from '../../../assets/images/mentorship/graduates/line.svg';
import MySlider from '../../../helpers/swiper/MySlider';
import first from '../../../assets/images/mentorship/graduates/firstPhoto.svg';
import second from '../../../assets/images/mentorship/graduates/secondPhoto.svg';
import third from '../../../assets/images/mentorship/graduates/thirdPhoto.svg';


const Graduates = () => {
  const graduates = [
    {
      id: 1,
      img: first,
      title: 'Я получила от программы больше чем ожидала',
      desc: 'Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.',
      fullName: 'Алия Алимова',
      place: 'Баткенская область'
    },
    {
      id: 2,
      img: third,
      title: 'Я получила от программы больше чем ожидала',
      desc: 'Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.',
      fullName: 'Алия Алимова',
      place: 'Баткенская область'
    },
    {
      id: 3,
      img: first,
      title: 'Я получила от программы больше чем ожидала',
      desc: 'Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.',
      fullName: 'Алия Алимова',
      place: 'Баткенская область'
    },
    {
      id: 4,
      img: third,
      title: 'Я получила от программы больше чем ожидала',
      desc: 'Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.',
      fullName: 'Алия Алимова',
      place: 'Баткенская область'
    },
    {
      id: 5,
      img: first,
      title: 'Я получила от программы больше чем ожидала',
      desc: 'Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.',
      fullName: 'Алия Алимова',
      place: 'Баткенская область'
    },
    {
      id: 6,
      img: third,
      title: 'Я получила от программы больше чем ожидала',
      desc: 'Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.',
      fullName: 'Алия Алимова',
      place: 'Баткенская область'
    }
  ]
  return (
    <section className='pb-20 graduates bg-[#EDEDED]'>
      <img src={line} alt="line" className='mx-auto'/>
      <h2 className='text-[#F59E0B] font-semibold text-[clamp(1.2rem,_2.5vw,_2.5rem)] text-center pb-10'>Наши выпускники</h2>
      <MySlider graduates={graduates}/>
    </section>

  )
}

export default Graduates