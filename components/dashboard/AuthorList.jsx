import localDate from "@/libs/localDate";
import { Link } from "@components";
import Image from "next/future/image";
import { MdUpdate, MdDeleteOutline } from "react-icons/md";

export default function AuthorList({
  id,
  name,
  job,
  createdAt,
  avatar,
  instagram,
}) {
  return (
    <tr>
      <td className="border-b border-secondary-200 bg-white px-5 py-5 text-sm">
        <p className="whitespace-no-wrap text-secondary-900">{id}</p>
      </td>

      <td className="border-b border-secondary-200 bg-white px-5 py-5 text-sm">
        <div className="flex items-center">
          <div className="h-10 w-10 flex-shrink-0">
            <Image
              className="h-full w-full rounded-full object-cover"
              src={avatar}
              alt={name}
            />
          </div>
          <div className="ml-3">
            <p className="whitespace-no-wrap text-secondary-900">{name}</p>
          </div>
        </div>
      </td>

      <td className="border-b border-secondary-200 bg-white px-5 py-5 text-sm">
        <p className="whitespace-no-wrap text-secondary-900">{job}</p>
      </td>

      <td className="border-b border-secondary-200 bg-white px-5 py-5 text-sm">
        <p className="whitespace-no-wrap text-secondary-900">
          {localDate(createdAt)}
        </p>
      </td>

      <td className="border-b border-secondary-200 bg-white px-5 py-5 text-sm">
        <Link
          className="whitespace-no-wrap text-secondary-900"
          href={`https://instagram.com/${instagram}`}
          children={instagram}
        />
      </td>

      <td className="border-b border-secondary-200 bg-white px-5 py-5 text-sm">
        <div className="flex gap-2">
          <button className="flex items-center gap-1 rounded-lg bg-sky-500 p-2 text-xs  text-white ">
            <MdUpdate />
            Update
          </button>
          <button className="flex items-center gap-1 rounded-lg bg-red-500 p-2 text-xs  text-white ">
            <MdDeleteOutline />
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}
