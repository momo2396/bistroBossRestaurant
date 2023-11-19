const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center w-4/12 mx-auto my-10">
      <p className="text-yellow-500 mb-2 font-light">{subHeading}</p>
      <h2 className="border-y-4 text-4xl py-3 border-yellow-500 uppercase">
        {heading}
      </h2>
    </div>
  );
};

export default SectionTitle;
