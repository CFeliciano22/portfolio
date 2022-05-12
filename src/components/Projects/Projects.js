import './Projects.scss'
import Tipsy from '../../assets/images/Tipsy.png'
import ProjectItems from './ProjectItems'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


export default function Projects() {
  return (
    <section id="projects">
    <h3 className='projects__title'>Projects</h3>
        <div className='projects__container'>
            {ProjectItems.map((item) => {
                 return (
            <div className='projects__item'>
                <div className='projects__item-image'>
                    <img key={item.id} className='image' src={item.src} alt={item.title}/>
                    <div className='projects__image-overlay'>
                        <p className='projects__description'>{item.description}</p>
                    </div>
                </div>
                    <h3 className='projects__item__title'>{item.title}</h3>
                    <a href={item.github} className='btn projects__btn' target='_blank'>Github</a>
                    <a href={item.website} className='btn projects__btn' target='_blank'>Website</a>
            </div>)} )}
        </div>
    </section>
    )
}

 
       