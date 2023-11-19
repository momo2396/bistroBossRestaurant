const MenuCard = ({ item }) => {
  return (
    <div className="flex flex-row gap-4 justify-center items-center">
      <img
        style={{ borderRadius: "0px 200px 200px 200px", background: "#D9D9D9" }}
        className="w-[130px] p-1"
        src={item?.image}
        alt=""
      />
      <div>
        <h2 className="uppercase text-2xl">{item?.name}------</h2>
        <p>{item?.recipe}</p>
      </div>
      <div>
        <p className="text-yellow-400 text-xl">${item?.price}</p>
      </div>
    </div>
  );
};

export default MenuCard;
