import PropTypes from "prop-types";

function IntroCard({ icon: Icon, title, content, list }) {
  return (
    <div className="mb-4 flex flex-col items-start rounded bg-blue-50 p-8 last:mb-0 md:flex-row">
      <Icon className="h-auto w-10 flex-shrink-0 text-blue-500" />
      <div className="mt-4 md:ml-8 md:mt-0">
        <h2 className="text-xl font-semibold text-blue-500">{title}</h2>
        <p className="mt-1 text-blue-900/60">{content}</p>
        <div className="flex flex-col">
          {list.map(({ title, description }) => (
            <div key={title} className="mt-4 flex items-start">
              <div className="mr-3 mt-2 h-3 w-3 bg-blue-900" />
              <div className="ml-2">
                <div className="text-lg font-semibold text-blue-900">
                  {title}
                </div>
                <div className="text-blue-900/60">{description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

IntroCard.defaultProps = {
  list: [],
};

IntroCard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.node,
  icon: PropTypes.func,
  list: PropTypes.array,
};

export default IntroCard;
