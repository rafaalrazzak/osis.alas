import { Container, Gradient } from "@components";
export default function Card() {
  return (
    <Container className="flex justify-center">
      <div className="flex justify-center my-24 lg:my-32 w-full ">
        <div className="bg-white/60 filter backdrop-blur-lg shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
          <div class="pb-3 flex-0 text-gray-400 whitespace-no-wrap">
            <i class="mx-1 rounded-full w-3 h-3 bg-red-400 inline-block"></i>
            <i class="mx-1 rounded-full w-3 h-3 bg-yellow-400 inline-block"></i>
            <i class="mx-1 rounded-full w-3 h-3 bg-green-400 inline-block"></i>
          </div>
          <div className="-mx-3 md:flex mb-6 ">
            <div className="-mx-3 md:flex mb-6"></div>
          </div>
        </div>
      </div>
    </Container>
  );
}
