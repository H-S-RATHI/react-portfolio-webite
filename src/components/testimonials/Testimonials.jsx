import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  const data = [
    {
      avatar: AVTR1,
      name: 'Tina Snow',
      review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti rerum aut mollitia voluptate est ipsa, officia dolore at! Voluptate mollitia reiciendis ut corrupti accusamus assumenda sunt, animi nihil incidunt ex.'
    },
    {
      avatar: AVTR2,
      name: 'Shatta Wale',
      review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti rerum aut mollitia voluptate est ipsa, officia dolore at! Voluptate mollitia reiciendis ut corrupti accusamus assumenda sunt, animi nihil incidunt ex.'
    },
    {
      avatar: AVTR3,
      name: 'Kwame Deaspite',
      review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti rerum aut mollitia voluptate est ipsa, officia dolore at! Voluptate mollitia reiciendis ut corrupti accusamus assumenda sunt, animi nihil incidunt ex.'
    },
    {
      avatar: AVTR4,
      name: 'Nana Ama McBrown',
      review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti rerum aut mollitia voluptate est ipsa, officia dolore at! Voluptate mollitia reiciendis ut corrupti accusamus assumenda sunt, animi nihil incidunt ex.'
    },
  ]
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable: true}}>
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonials">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar One" />
                </div>
                <h5 className='clients__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )

          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials