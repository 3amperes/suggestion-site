// Import Swiper React components
import PropTypes from 'prop-types';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { urlFor } from '@lib/sanity';

// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y]);

const Slider = ({ items }) => {
  if (!items || items.length <= 0) {
    return null;
  }
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      navigation={{
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev',
      }}
      pagination={{ clickable: false, type: 'fraction' }}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {items &&
        items.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                src={urlFor(item).auto('format').size(360, 240).url()}
                alt={item.alt}
                className="w-full"
              />
            </SwiperSlide>
          );
        })}
      {items.length > 1 && (
        <>
          <div className="slider-button-prev" role="button">
            <svg
              width="10"
              viewBox="0 0 8.09 16.37"
              className="fill-current transform rotate-90"
            >
              <use xlinkHref="#arrow" />
            </svg>
          </div>
          <div className="slider-button-next" role="button">
            <svg
              width="10"
              viewBox="0 0 8.09 16.37"
              className="fill-current transform -rotate-90"
            >
              <use xlinkHref="#arrow" />
            </svg>
          </div>
        </>
      )}
    </Swiper>
  );
};

Slider.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
  city: PropTypes.string,
  sector: PropTypes.string,
  area: PropTypes.number,
  description: PropTypes.array,
  details: PropTypes.array,
  dpe: PropTypes.number,
  ges: PropTypes.number,
  price: PropTypes.number,
  priceDetail: PropTypes.array,
  gallery: PropTypes.array,
};

export default Slider;
