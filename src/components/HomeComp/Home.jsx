import Banner from "./Banner";
import Categories from "./Categories";
import FeaturedFood from "./FeaturedFood";
import PopularMenu from "./PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <PopularMenu></PopularMenu>
      <FeaturedFood></FeaturedFood>
    </div>
  );
};

export default Home;
