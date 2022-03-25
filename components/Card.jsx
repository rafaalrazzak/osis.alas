import { Container } from "@components";
export default function Card({ from, to, instagram, message, date }) {
  return (
    <Container>
      <div className="flex justify-center gap-4 w-full ">
        <div className="bg-white/60 filter backdrop-blur-lg shadow-md rounded-lg px-8 pt-6 pb-8 mb-4  flex flex-col my-2">
          <div class="pb-3 flex -mx-4 text-gray-400 whitespace-no-wrap justify-between">
            <div className="flex flex-riw">
              <i class="mx-1 rounded-full w-3 h-3 bg-red-400 inline-block"></i>
              <i class="mx-1 rounded-full w-3 h-3 bg-yellow-400 inline-block"></i>
              <i class="mx-1 rounded-full w-3 h-3 bg-green-400 inline-block"></i>
            </div>
            <div className="mb-3 flex text-sm">{date}</div>
          </div>
          <div className="-mx-3 md:flex mb-6 flex flex-col">
            <div className="gap-1 flex flex-col text-sm">
              <div className="">
                <span className="text-blue-600">Dari: </span>
                {from}
              </div>
              <div className="">
                <span className="text-blue-600">Untuk: </span>
                <a
                  href={`https://instagram.com/${instagram}`}
                  className="text-blue-600 underline"
                >
                  @{instagram}
                </a>{" "}
                ({to}){" "}
              </div>
              <div className="">
                <span className="text-blue-600">Pesan: </span>
                {message}
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6"></div>
          </div>
        </div>
      </div>
    </Container>
  );
}
