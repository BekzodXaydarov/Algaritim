import React, { forwardRef } from "react";
import { Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const Swipper = forwardRef(({ width, body, pag }, ref) => {
  return (
    <Swiper
      slidesPerView={width}
      spaceBetween={100}
      modules={[Autoplay, Pagination]}
      pagination={{
        clickable: true,
      }}
      
      autoplay={true}
      className="card_wrapper"
      ref={ref}
    >
      {body}
    </Swiper>
  );
});

export default Swipper;
