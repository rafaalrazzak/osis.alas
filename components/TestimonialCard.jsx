import PropTypes from "prop-types";
import Image from "next/image";
function TestimonialCard({ testimoni, name, avatar, job }) {
  return (
    <div className="jusfity-center rounded bg-blue-50 p-8 text-center">
      <div className="rounded-lg bg-white p-8">
        <p className="mb-6 text-gray-600">{testimoni}</p>
        <div className="flex flex-col items-center gap-2">
          <Image
            className="h-14 w-14 flex-shrink-0 rounded-full object-cover"
            src={avatar}
            width={50}
            height={50}
            alt="avatar"
          />
          <div className="mt-4 md:mt-0">
            <h2 className="text-lg font-semibold text-blue-900">{name}</h2>
            <p className="text-gray-600">{job}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

TestimonialCard.propTypes = {
  testimoni: PropTypes.string,
  name: PropTypes.string,
  avatar: PropTypes.string,
  job: PropTypes.string,
};

export default TestimonialCard;
