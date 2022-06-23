import { Dots } from "@components";
export default function Form({ name, children, ...props }) {
  return (
    <>
      <form
        className="mx-auto flex max-w-md flex-col items-center justify-center px-12 pt-24 pb-20"
        {...props}
      >
        <div className="mt-16 w-full rounded-xl bg-primary-200/30 p-10 shadow backdrop-blur-lg">
          <Dots />
          <p className="py-4 text-xl font-extrabold leading-6 text-primary-800 dark:text-primary-200">
            {name}
          </p>
          {children}
        </div>
      </form>
    </>
  );
}
