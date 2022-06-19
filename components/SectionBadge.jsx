import PropTypes from "prop-types";

function SectionBadge({ children }) {
  return (
    <div className="mb-3 font-mono text-sm uppercase tracking-wider text-blue-500">
      {children}
    </div>
  );
}

SectionBadge.propTypes = {
  children: PropTypes.node,
};

export default SectionBadge;
