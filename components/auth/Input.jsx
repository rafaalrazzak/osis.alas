import clsx from "clsx";
export default function Input({ name, children, ...props }) {
  return (
    <>
      <label className="text-sm font-medium leading-none text-primary-800 dark:text-primary-200">
        {name}
      </label>
      <div className="relative items-center">
        <input
          className={clsx(
            "mt-2 w-full rounded-lg border bg-primary-300 py-3 pl-3 text-xs font-medium leading-none text-gray-800 placeholder:text-gray-800 focus:outline-none",
            children && "pr-8"
          )}
          {...props}
        />
        <div className="absolute right-0 top-4 cursor-pointer">{children}</div>
      </div>
    </>
  );
}
