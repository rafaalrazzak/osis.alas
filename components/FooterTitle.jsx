import PropTypes from "prop-types";

function FooterTitle({ children }) {
  return (
    <h2 className="mb-4 font-semibold uppercase tracking-wide text-white text-opacity-100 ">
      {children}
    </h2>
  );
}

FooterTitle.propTypes = {
  children: PropTypes.node,
};

export default FooterTitle;
