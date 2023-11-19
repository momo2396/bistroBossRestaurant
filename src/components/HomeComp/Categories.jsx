import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import './styles.css';
import { Autoplay, Pagination } from "swiper/modules";
import img1 from "../../assets/assets/home/slide1.jpg";
import img2 from "../../assets/assets/home/slide2.jpg";
import img3 from "../../assets/assets/home/slide3.jpg";
import img4 from "../../assets/assets/home/slide4.jpg";
import SectionTitle from "../shared/SectionTitle";
const Categories = () => {
  return (
    <div className="py-10">
      <SectionTitle
        subHeading={"---From 11.00 AM to 10.00 PM---"}
        heading={"Order Online"}
      ></SectionTitle>
      <Swiper
        loop={true}
        slidesPerView={4}
        // centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper max-w-[1200px] mx-auto"
      >
        <SwiperSlide>
          <img src={img1} className="mx-auto" />
          <h2 className="-mt-16 text-white uppercase"> Salad</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
          <h2 className="-mt-16 text-white uppercase">Pizza</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
          <h2 className="-mt-16 text-white uppercase">Soup</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} />
          <h2 className="-mt-16 text-white uppercase">Dessert</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} />
          <h2 className="-mt-16 text-white uppercase">Dessert</h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Categories;
