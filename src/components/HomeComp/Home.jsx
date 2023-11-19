import Banner from "./Banner";
import Categories from "./Categories";
import FeaturedFood from "./FeaturedFood";
import PopularMenu from "./PopularMenu";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <PopularMenu></PopularMenu>
      <FeaturedFood></FeaturedFood>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
