import { useEffect, useState } from "react";
import SectionTitle from "../shared/SectionTitle";
import MenuCard from "../shared/MenuCard/MenuCard";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popular = data.filter((item) => item.category === "popular");
        setMenu(popular);
        console.log(popular);
      });
  }, []);
  return (
    <div className="py-10">
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"our popular foods"}
      ></SectionTitle>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {menu?.map((item) => (
          <MenuCard key={item._id} item={item}></MenuCard>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
