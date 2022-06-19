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
      <div className="my-2 mb-4 flex flex-col rounded-lg bg-white/60 px-8 pt-6 pb-8 shadow-md filter backdrop-blur-lg">
        <div className="-mx-3 flex items-center justify-between gap-2 pb-3 text-gray-400">
          <div className="flex gap-1">
            <i className="h-3 w-3 rounded-full bg-red-400"></i>
            <i className="h-3 w-3 rounded-full bg-yellow-400"></i>
            <i className="h-3 w-3 rounded-full bg-green-400"></i>
          </div>
          <div className="flex items-center px-3 text-xs sm:text-sm">
            {dateLocal}
          </div>
        </div>
        <div className="-mx-3 mb-6 flex flex-col md:flex">
          <div className="flex flex-col gap-1 text-sm">
            <div>
              <span className="text-blue-600">Dari: </span>
              {from}
            </div>

            <div>
              <span className="text-blue-600">Pesan: </span>
              {message}
            </div>
          </div>
          <div className="-mx-3 mb-6 md:flex"></div>
        </div>
      </div>
    </Container>
  );
}
