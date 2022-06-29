import { Button as Btn } from "@components";
export default function Button({ name, ...props }) {
  return (
    <Btn
      variant="solidYellow"
      size={"small"}
      className="bg-secondary-500 my-4 flex w-full justify-center rounded-lg border py-4 text-center text-sm font-semibold leading-none text-primary-50 outline-none disabled:opacity-50"
      {...props}
    >
      {name}
    </Btn>
  );
}
