import { useState, useEffect } from "react";

export default function Form() {
  const [toggle, setToggle] = useState(true);
  const [fromText, setFromText] = useState();
  const [toText, setToText] = useState();
  const [igText, setIgText] = useState();
  const [msgText, setMsgText] = useState();
  const toggleClass = " transform translate-x-3";

  const dataForm = {
    from: { fromText },
    to: { toText },
    ig: { igText },
    msg: { msgText },
  };

  function handleFromTextFieldChange(event) {
    setFromText(event.target.value);
  }
  function handleToTextFieldChange(event) {
    setToText(event.target.value);
  }
  function handleIgTextFieldChange(event) {
    setIgText(event.target.value);
  }
  function handleMsgTextFieldChange(event) {
    setMsgText(event.target.value);
  }

  function handleButtonOnClick() {}

  //react useEffect
  useEffect(() => {
    if (toggle) {
      setFromText("Anonymous");
    } else {
      setFromText(fromText);
    }
  });
  return (
    
      <div className="w-full lg:w-6/12">
        <div className="relative bg-white/60 filter backdrop-blur-lg shadow-md rounded-lg px-8 pt-6 pb-8 flex flex-col w-full">
          <div class="pb-3 flex-0 text-gray-400 whitespace-no-wrap">
            <i class="mx-1 rounded-full w-3 h-3 bg-red-400 inline-block"></i>
            <i class="mx-1 rounded-full w-3 h-3 bg-yellow-400 inline-block"></i>
            <i class="mx-1 rounded-full w-3 h-3 bg-green-400 inline-block"></i>
          </div>
          <form onSubmit={handleButtonOnClick()}>
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
                  value={fromText}
                  onChange={(e) => handleFromTextFieldChange(e)}
                  required
                />
                <div className="flex flex-row justify-start h-5 m-3 w-full items-center ">
                  {/*   Switch Container */}

                  <div
                    className="w-8 h-4 flex items-center bg-gray-100 rounded-full p-1 cursor-pointer shadow-md"
                    onClick={() => {
                      setFromText("");
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
                  value={toText}
                  onChange={(e) => handleToTextFieldChange(e)}
                  required
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
                  value={igText}
                  onChange={(e) => handleIgTextFieldChange(e)}
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
                  value={msgText}
                  onChange={(e) => handleMsgTextFieldChange(e)}
                  required
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
