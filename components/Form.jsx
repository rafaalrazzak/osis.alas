import { useState } from "react";
import { FcSms } from "react-icons/fc";
import { SubmitPost } from "@/libs/submit";
export default function Form() {
  const [formData, setFormData] = useState({
    from: "Seseorang",
    saran: "",
  });

  const updateInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  function resetForm() {
    setFormData({
      from: "Seseorang",
      saran: "",
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await SubmitPost(formData.from, formData.saran).then(() => {
      resetForm();
    });
  }
  const [toggle, setToggle] = useState(true);
  function handleToggle() {
    setToggle(!toggle);
    if (!toggle) {
      setFormData({
        ...formData,
        from: "Seseorang",
      });
    } else {
      setFormData({
        ...formData,
        from: "",
      });
    }
  }
  const toggleClass = "transform translate-x-3";
  return (
    <div className="w-full sm:w-8/12">
      <div className="relative flex w-full flex-col rounded-lg bg-white px-8 pt-6 pb-8 shadow-md ">
        <div className="flex-0 whitespace-no-wrap relative -my-6 -mx-8 flex items-center rounded-t-lg bg-gray-200 text-gray-400">
          <div className="px-3 py-2">
            <i className="mx-1 inline-block h-3 w-3 rounded-full bg-red-400"></i>
            <i className="mx-1 inline-block h-3 w-3 rounded-full bg-yellow-400"></i>
            <i className="mx-1 inline-block h-3 w-3 rounded-full bg-green-400"></i>
          </div>
          <div className="absolute top-1 left-20 mb-6 flex items-center justify-center self-center rounded-t bg-white px-3 py-3 text-center text-xs sm:text-sm">
            <div className="-mt-1 flex items-center">
              <FcSms />
              <p className="mx-3 flex items-center justify-center">
                Kirim Saran
              </p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="pt-12">
          <div className="-mx-3 mb-6 md:flex ">
            <div className="relative mb-6 w-full px-3 md:mb-0">
              <label
                className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide"
                htmlFor="dari"
              >
                Dari
              </label>
              <input
                className="text-grey-darker bg-grey-lighter mb-3 block w-full appearance-none rounded bg-white/70 py-3  px-4 text-sm outline-0 transition-all duration-500 focus:ring focus:ring-sky-600/30 disabled:bg-blue-300/30"
                id="from"
                name="from"
                type="text"
                placeholder="Nama Kamu"
                disabled={toggle}
                onChange={updateInput}
                value={formData.from}
                required
              />
              <div className="m-3 flex h-5 w-full flex-row items-center justify-start ">
                {/*   Switch Container */}

                <div
                  className="flex h-4 w-8 cursor-pointer items-center rounded-full bg-gray-100 p-1 shadow-md"
                  onClick={handleToggle}
                >
                  {/* Switch */}
                  <div
                    className={
                      `${
                        toggle ? "bg-green-500" : "bg-red-500"
                      } h-3 w-3 transform rounded-full shadow-md duration-300 ease-in-out` +
                      (toggle ? toggleClass : null)
                    }
                  ></div>
                </div>
                <div className="m-2 flex text-xs">Anonymous</div>
              </div>
            </div>
          </div>

          <div className="-mx-3 mb-6 md:flex">
            <div className="px-3 md:w-full">
              <label
                className="text-grey-darker mb-2 block text-xs font-bold uppercase tracking-wide"
                htmlFor="saran"
              >
                Saran
              </label>
              <textarea
                required
                className="bg-grey-lighter text-grey-darker border-grey-lighter mb-3 block w-full appearance-none rounded border bg-white/70 py-3 px-4 text-sm outline-0 transition-all duration-500 focus:ring focus:ring-sky-600/30"
                id="saran"
                name="saran"
                placeholder="Saran / masukan yang ingin kamu sampaikan"
                row={4}
                onChange={updateInput}
                value={formData.saran}
              />
            </div>
          </div>
          <div className="mb-6 justify-end md:flex">
            <button
              className="rounded-md border-transparent bg-blue-300 px-5 py-2 text-sm  text-blue-900 transition-all  duration-300 hover:bg-blue-200"
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
