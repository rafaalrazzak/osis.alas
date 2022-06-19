import PropTypes from "prop-types";

function FooterLink({ children, href }) {
  return (
    <a
      href={href}
      className="mb-2 inline-block text-lg text-white text-opacity-70 transition hover:text-opacity-100"
    >
      {children}
    </a>
  );
}

FooterLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
};

export default FooterLink;
