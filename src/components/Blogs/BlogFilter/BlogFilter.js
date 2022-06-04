import React, { useRef, useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import './BlogFilter.css';

const DUMMY_FILTERS = [
  { id: 'f1', filter: 'Health' },
  { id: 'f2', filter: 'Cuisines' },
  { id: 'f3', filter: 'Trending' },
  { id: 'f4', filter: 'Cooking' },
  { id: 'f5', filter: 'Diet' },
  { id: 'f6', filter: 'Foreign Tastes' },
  { id: 'f7', filter: 'Chinese' },
  { id: 'f8', filter: 'Indian' },
  { id: 'f9', filter: 'Snacks' },
  { id: 'f10', filter: 'South Indian' },
  { id: 'f11', filter: 'Italian' },
  { id: 'f12', filter: 'Tibetian' },
  { id: 'f13', filter: 'Momos' },
];



const BlogFilter = () => {
  const [rightSlide, setRightSlide] = useState(1);
  const [leftSlide, setLeftSlide] = useState(1);
  const cardRef = useRef();

  // const slideFilterHandler = (direction) => {
  //   if (direction === 'left') {
  //     setRightSlide(1);
  //     setLeftSlide(leftSlide + 1);
  //     cardRef.current.style.transform = `translateX(${100 * leftSlide}px)`;
  //   } else if (direction === 'right') {
  //     setRightSlide(rightSlide + 1);
  //     setLeftSlide(1);
  //     cardRef.current.style.transform = `translateX(-${100 * rightSlide}px)`;
  //   }
  // };

  return (
    <>
      <div className="blog-filter">
        <h1>Topics</h1>
        {/*<div
          className="filter-card__left-btn"
          onClick={slideFilterHandler.bind(null, 'left')}
        >




          <AiOutlineLeft />
  </div>*/}

        <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
      <div className="filter-cards__list">
          <div className="filters" ref={cardRef}>
            {DUMMY_FILTERS.map((f) => (
              <SwiperSlide>
              <div className="filter-card" key={f.id}>
                <p>{f.filter}</p>
              </div>
              </SwiperSlide>
            ))}
          </div>
        </div>
        
        
      </Swiper>




       
        {/*<div
          className="filter-card__right-btn"
          onClick={slideFilterHandler.bind(null, 'right')}
        >
          <AiOutlineRight />
            </div>*/}
      </div>
      <hr />
    </>
  );
};

export default BlogFilter;
