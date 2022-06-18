import PropTypes from "prop-types";

function FooterTitle({ children }) {
  return (
    <h2 className="font-semibold tracking-wide text-white uppercase text-opacity-100 mb-4 ">
      {children}
    </h2>
  );
}

FooterTitle.propTypes = {
  children: PropTypes.node,
};

export default FooterTitle;
