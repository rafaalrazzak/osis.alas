import { useUser } from "@/context/user";

export default function Acoount() {
  const { user } = useUser();
  return (
    <div className="flex min-h-screen items-center justify-center">
      <p className="text center flex justify-center">
        Hello,{" "}
        <span className="font-semibold text-primary-600">
          {user?.username || user?.email}
        </span>{" "}
      </p>
    </div>
  );
}
