import { useEffect, useState } from "react";
import clsx from "clsx";
import { MdMenu, MdClose } from "react-icons/md";
import { Link, SEO } from "@components";
import supabase from "@/libs/supabase";
import AuthorList from "@/componentsDashboard/AuthorList";
import { authorNav } from "@/data/dashboard/author";
import { FiSearch } from "react-icons/fi";
import AuthorHead from "@/componentsDashboard/AuthorHead";
import localDate from "@/libs/localDate";

export async function getStaticProps() {
  const { data: author, error } = await supabase.from("author").select();
  if (error) throw error;
  return {
    props: {
      author,
    },
  };
}

export default function Author({ author }) {
  const [collapse, setCollpase] = useState(false);
  const [search, setSearch] = useState("");
  const filteredAuthor = author.filter(
    ({ name, job, created_at, instagram }) => {
      const searchContent = name + job + localDate(created_at) + instagram;
      return searchContent.toLowerCase().includes(search.toLowerCase());
    }
  );
  useEffect(() => {
    function responsiveNavbar() {
      const vw = window.outerWidth;
      const threshold = 1024;

      if (vw > threshold) setCollpase(true);
    }

    responsiveNavbar();

    window.addEventListener("resize", responsiveNavbar);
  }, []);

  const displayAuthor = author.length > 0 && !search ? author : filteredAuthor;

  return (
    <>
      <SEO title="Author" />
      <div className="w-full rounded-md bg-white p-8">
        <nav className="flex items-center gap-2 pb-6">
          <h2 className="font-semibold text-secondary-600">Author</h2>
          <div
            className={clsx(
              "md:bg-bg-gradient fixed top-0 flex h-full w-full flex-col rounded-bl-xl bg-gradient-to-br from-secondary-200/50 to-secondary-300/50 px-10 py-16 shadow-md backdrop-blur-lg transition-all md:flex md:w-64 lg:relative lg:w-10/12 lg:flex-row lg:items-center lg:from-transparent lg:to-transparent lg:px-0 lg:py-0 lg:shadow-none",
              collapse ? "right-0" : "right-[-100%]"
            )}
          >
            <div className={"flex w-full flex-1 lg:w-8/12 lg:justify-center"}>
              <ul
                className={
                  "flex w-full flex-col gap-2 lg:my-0 lg:flex-row lg:items-center lg:justify-center"
                }
              >
                {authorNav.map((item) => (
                  <li key={item.text}>
                    <Link
                      href={item.href}
                      className={`flex text-secondary-900 lg:mx-6 ${
                        item.active
                          ? "font-bold underline"
                          : "text-opacity-75 hover:text-opacity-100"
                      } transition-all`}
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-1 items-center rounded-md bg-secondary-100 px-4 py-2 text-sm">
            <FiSearch />
            <input
              className="mx-2 block bg-transparent outline-none"
              placeholder="Search something here...."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* mobile toggler */}
          <button
            aria-label="Hamburger Button"
            onClick={() => setCollpase(!collapse)}
            className={"z-30 ml-auto lg:hidden"}
          >
            {collapse ? (
              <MdClose className="text-secondary-900" size={20} />
            ) : (
              <MdMenu className="text-secondary-900" size={20} />
            )}
          </button>
        </nav>
          <div className="-mx-4 overflow-x-auto px-4 py-4 sm:-mx-8 sm:px-8">
            <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <AuthorHead name="Id" />
                    <AuthorHead name="Nama" />
                    <AuthorHead name="Job" />
                    <AuthorHead name="Tanggal Pembuatan" />
                    <AuthorHead name="Instagram" />
                    <AuthorHead name="Setting" />
                  </tr>
                </thead>
                <tbody>
                  {displayAuthor.map(
                    ({ id, name, job, created_at, avatar, instagram }) => (
                      <AuthorList
                        key={id}
                        id={id}
                        name={name}
                        createdAt={created_at}
                        job={job}
                        avatar={avatar}
                        instagram={instagram}
                      />
                    )
                  )}
                  {!filteredAuthor.length && (
                    <div className="truncate p-4">
                      Author tidak ditemukan
                    </div>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </>
  );
}
