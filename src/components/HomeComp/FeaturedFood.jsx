import SectionTitle from "../shared/SectionTitle";
import pop from "../../assets/assets/home/featured.jpg";
import "./feature.css";
const FeaturedFood = () => {
  return (
    <div className="feature py-20 text-white my-20 bg-fixed">
      <div className="bg-black bg-opacity-40 py-10">
        <SectionTitle
          heading={"from our menu"}
          subHeading={"---Check it out---"}
        ></SectionTitle>

        <div className=" text-white lg:flex gap-5 justify-center items-center px-40 py-5">
          <div>
            <img className="w-[800px]" src={pop} alt="" />
          </div>
          <div>
            <p>March 20, 2023</p>
            <h2>WHERE CAN I GET SOME?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <div>
              <button className="btn-outline btn text-white border-0 border-b-4 border-black">
                {" "}
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedFood;
