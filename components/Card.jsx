import { Container } from "@components";
export default function Card() {
  return (
    <Container>
      <div className="flex flex-wrap my-32 gap-12 w-full justify-center items-center">
      <div className="w-full sm:w-3/4 md:w-1/3 flex flex-col">
        <div class="mx-auto w-full ">
          <div class="w-full h-11 relative rounded-t-lg bg-blue-300 flex overflow-hidden justify-start items-center space-x-1.5 px-2">
            <div class="absolute w-full h-full inset-0 bg-black opacity-50"></div>
            <span class="relative w-3 h-3 2 rounded-full bg-red-400"></span>
            <span class="relative w-3 h-3 2 rounded-full bg-yellow-400"></span>
            <span class="relative w-3 h-3 2 rounded-full bg-green-400"></span>
          </div>
          <div class="relative bg-blue-200 w-full h-96 border-t rounded-b-lg border-blue-700">
            <div class="absolute w-full h-full inset-0 bg-black opacity-50 rounded-b-lg"></div>
          </div>
        </div>
      </div>
      <div className=" w-full sm:w-3/4 md:w-1/3 flex flex-col">
        <div class=" mx-auto w-full ">
          <div class="w-full h-11 relative rounded-t-lg bg-blue-300 flex overflow-hidden justify-start items-center space-x-1.5 px-2">
            <div class="absolute w-full h-full inset-0 bg-black opacity-50"></div>
            <span class="relative w-3 h-3 2 rounded-full bg-red-400"></span>
            <span class="relative w-3 h-3 2 rounded-full bg-yellow-400"></span>
            <span class="relative w-3 h-3 2 rounded-full bg-green-400"></span>
          </div>
          <div class="relative bg-blue-200 w-full h-96 border-t rounded-b-lg border-blue-700">
            <div class="absolute w-full h-full inset-0 bg-black opacity-50 rounded-b-lg"></div>
          </div>
        </div>
      </div>
    
      </div>
    </Container>
  );
}
