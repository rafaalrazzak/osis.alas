import { Container } from "@components";
export default function Card({ from, message, date }) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const dateLocal = new Date(date).toLocaleDateString("id", options);
  return (
    <Container>
      <div className="bg-white/60 filter backdrop-blur-lg shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
        <div className="pb-3 gap-2 -mx-3 flex items-center text-gray-400 justify-between">
          <div className="flex gap-1">
            <i className="rounded-full w-3 h-3 bg-red-400"></i>
            <i className="rounded-full w-3 h-3 bg-yellow-400"></i>
            <i className="rounded-full w-3 h-3 bg-green-400"></i>
          </div>
          <div className="px-3 items-center flex text-xs sm:text-sm">
            {dateLocal}
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6 flex flex-col">
          <div className="gap-1 flex flex-col text-sm">
            <div>
              <span className="text-blue-600">Dari: </span>
              {from}
            </div>

            <div>
              <span className="text-blue-600">Pesan: </span>
              {message}
            </div>
          </div>
          <div className="-mx-3 md:flex mb-6"></div>
        </div>
      </div>
    </Container>
  );
}
