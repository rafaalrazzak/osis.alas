import Image from "next/future/image";
import localDate from "@/libs/localDate";
import Button from "./Button";
import { Link } from "@components";

export default function BlogCard({
  date,
  title,
  description,
  thumbnail,
  author,
  slug,
}) {
  const { name, avatar } = author;
  const blogUrl = `/blog/${slug}`;
  return (
    <div className="mx-auto max-w-md">
      <div className=" max-w-sm rounded-lg border border-gray-200 bg-white shadow-md">
        <Link href={blogUrl}>
          {thumbnail && (
            <Image
              className="w-full rounded-t-lg object-cover"
              src={thumbnail}
              alt={title}
            ></Image>
          )}
        </Link>
        <div className="flex flex-col gap-2 p-4">
          <div>
            <p className="text-sm text-primary-900">{localDate(date)}</p>
            <Link href={blogUrl}>
              <h2 className="text-2xl font-bold tracking-tight text-primary-600">
                {title}
              </h2>
            </Link>
            <div className="flex items-center gap-2 rounded text-sm text-primary-900">
              <Image
                src={avatar}
                width={20}
                height={20}
                className="rounded-full"
              />
              <p>{name}</p>
            </div>
          </div>
          <p className="mb-3 font-normal text-primary-900">{description}</p>
          <Button
            variant="solidBlue"
            size="small"
            className="flex w-full items-center justify-center text-center"
            href={blogUrl}
          >
            <p>Read More</p>
          </Button>
        </div>
      </div>
    </div>
  );
}
