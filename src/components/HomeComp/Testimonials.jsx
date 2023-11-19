import SectionTitle from "../shared/SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
const Testimonials = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div className="my-20">
      <SectionTitle
        subHeading={"---What out clients say---"}
        heading={"Testimonials"}
      ></SectionTitle>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {review?.map((rev) => (
            <>
              <SwiperSlide className="px-20 text-center" key={rev._id}>
                <div className="flex justify-center items-center">
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={rev?.rating}
                    readOnly
                  />
                </div>
                <p>{rev.details}</p>
                <h2 className=" text-yellow-500 font-bold">{rev.name}</h2>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
