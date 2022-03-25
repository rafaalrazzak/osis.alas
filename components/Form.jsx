import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const [toggle, setToggle] = useState(true);
  const toggleClass = " transform translate-x-3";
  
  return (
    <div className="w-full lg:w-6/12">
      <div className="relative bg-white/60 filter backdrop-blur-lg shadow-md rounded-lg px-8 pt-6 pb-8 flex flex-col w-full">
        <div className="pb-3 flex-0 text-gray-400 whitespace-no-wrap">
          <i className="mx-1 rounded-full w-3 h-3 bg-red-400 inline-block"></i>
          <i className="mx-1 rounded-full w-3 h-3 bg-yellow-400 inline-block"></i>
          <i className="mx-1 rounded-full w-3 h-3 bg-green-400 inline-block"></i>
        </div>
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          <div className="-mx-3 md:flex mb-6 ">
            <div className="relative md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="dari"
              >
                Dari
              </label>
              <input
                className="appearance-none block w-full text-grey-darker rounded py-3 px-4 mb-3 bg-grey-lighter  disabled:bg-blue-300/30 text-sm bg-white/70 focus:ring focus:ring-sky-600/30 outline-0 transition-all duration-500"
                id="from"
                name="from"
                type="text"
                placeholder="Nama Kamu"
                disabled={toggle}
                defaultValue="Anonymous"
                {...register("from", { required: true, maxLength: 20 })}
              />
              <div className="flex flex-row justify-start h-5 m-3 w-full items-center ">
                {/*   Switch Container */}

                <div
                  className="w-8 h-4 flex items-center bg-gray-100 rounded-full p-1 cursor-pointer shadow-md"
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  {/* Switch */}
                  <div
                    className={
                      `${
                        toggle ? "bg-green-500" : "bg-red-500"
                      } h-3 w-3 rounded-full shadow-md transform duration-300 ease-in-out` +
                      (toggle ? toggleClass : null)
                    }
                  ></div>
                </div>
                <div className="text-xs m-2 flex">Anonymous</div>
              </div>
            </div>

            <div className="md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="dari"
              >
                Untuk
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker bg-white/70 focus:ring focus:ring-sky-600/30 outline-0 rounded py-3 px-4 text-sm transition-all duration-500"
                id="to"
                name="to"
                type="text"
                placeholder="Seseorang"
                {...register("to", { required: true, maxLength: 20 })}
              />
            </div>
          </div>

          <div className="-mx-3 md:flex mb-6">
            <div className=" md:w-full px-3">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="instagram"
              >
                Instagram
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker bg-white/70 focus:ring focus:ring-sky-600/30 outline-0 transition-all duration-500 rounded py-3 px-4 mb-3 text-sm "
                id="instagram"
                name="instagram"
                placeholder="username"
                {...register("instagram")}
              />
              <p className="text-grey-dark text-xs italic">
                instagram yang anda ingin tag (optional)
              </p>
            </div>
          </div>

          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-full px-3">
              <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="pesan"
              >
                Pesan
              </label>
              <textarea
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 text-sm bg-white/70 focus:ring focus:ring-sky-600/30 outline-0 transition-all duration-500"
                id="msg"
                name="msg"
                placeholder="Pesan yang ingin anda sampaikan"
                row={4}
                required
                {...register("message")}
              />
            </div>
          </div>
          <div className="justify-end md:flex mb-6">
            <button
              className="text-sm text-blue-900 bg-blue-300 hover:bg-blue-200 border-transparent rounded-md  px-5 py-2  transition-all duration-300"
              type="submit"
            >
              Kirim
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
