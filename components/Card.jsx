import { Container } from "@components";
export default function Card({from, to, instagram, message}) {


  return (
    <Container className="flex relative group justify-center gap-2 ">
      <div className="flex justify-center  w-full ">
        <div className="bg-white/40 filter backdrop-blur-lg shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
          <div class="pb-3 -mx-4  whitespace-no-wrap flex flex-row justify-start">
            <i class="mx-1 rounded-full w-3 h-3 bg-red-400 inline-block"></i>
            <i class="mx-1 rounded-full w-3 h-3 bg-yellow-400 inline-block"></i>
            <i class="mx-1 rounded-full w-3 h-3 bg-green-400 inline-block"></i>
          </div>
          <div className="-mx-3 md:flex mb-6 flex flex-col">
            <div className="gap-1 flex flex-col">
            <div className="text-sm ">
              <span className="text-blue-600">Dari: </span>{from}</div>
            <div className="text-sm"><span className="text-blue-600">Untuk: </span><a href={`https://instagram.com/${instagram}`} className="text-blue-600 underline">@{instagram}</a> ({to}) </div>
            <div className="text-sm"><span className="text-blue-600">Pesan: </span>{message}</div>
              </div>
            <div className="-mx-3 md:flex mb-6"></div>
          </div>
        </div>
      </div>
    </Container>
  );
}
