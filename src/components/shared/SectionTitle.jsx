const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center flex flex-col">
      <p>{subHeading}</p>
      <hr />
      <h2>{heading}</h2>
    </div>
  );
};

export default SectionTitle;
