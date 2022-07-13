import { Link } from "@components";
import { useUser } from "@/context/user";
import href from "@/data/href";

export default function Acoount() {
  const { user } = useUser();
  return (
    <div className="flex min-h-screen items-center justify-center flex-col">
      <p className="text center flex justify-center">
        Hello,{" "}
        <span className="font-semibold text-primary-600">
          {user?.username || user?.email}
        </span>{" "}
      </p>
      <Link href={href.resetPassword}>reset password?</Link>
    </div>
  );
}
