import Image from "next/future/image";
import localDate from "@/libs/localDate";
import Button from "./Button";

export default function BlogCard({ date, title, contain, thumbnail, author }) {
  return (
    <div className="mx-auto max-w-md">
      <div className=" max-w-sm rounded-lg border border-gray-200 bg-white shadow-md">
        <a href="#">
          {thumbnail && (
            <Image className="rounded-t-lg" src={thumbnail} alt={title}></Image>
          )}
        </a>
        <div className="flex flex-col gap-2 p-4">
          <p className="text-sm text-primary-900">{localDate(date)}</p>
          <a href="#">
            <h2 className="text-2xl font-bold tracking-tight text-primary-600">
              {title}
            </h2>
            {author.map((name, i) => (
              <p
                key={i}
                className="inline-block rounded text-sm text-primary-900"
              >
                by: {name}
              </p>
            ))}
          </a>
          <p className="mb-3 font-normal text-primary-900">{contain}</p>
          <Button
            variant="solidBlue"
            size="small"
            className="flex w-full items-center justify-center text-center"
          >
            <p>Read More</p>
          </Button>
        </div>
      </div>
    </div>
  );
}
