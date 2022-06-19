import PropTypes from "prop-types";

function LangCard({ logo, name }) {
  return (
    <div className="flex h-24 w-full flex-shrink-0 items-center justify-center rounded-lg bg-white p-4 shadow-xl lg:p-4 xl:p-8">
      <img src={logo} alt={name} className="h-14" />
    </div>
  );
}

LangCard.propTypes = {
  logo: PropTypes.string,
  name: PropTypes.string,
};

export default LangCard;
