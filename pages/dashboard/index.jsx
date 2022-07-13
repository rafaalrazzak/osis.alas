import href from "@/data/href";
import { Link } from "@components";

export default function Dashboard() {
  return (
    <div className="flex h-screen items-center justify-center gap-2">
      <Link
        href={href.authors}
        className="rounded-lg bg-primary-800 px-3 py-2 text-white"
      >
        Author
      </Link>
      <Link
        href={href.account}
        className="rounded-lg bg-primary-800 px-3 py-2 text-white"
      >
        Account
      </Link>
      <Link
        href={href.saran}
        className="rounded-lg bg-primary-800 px-3 py-2 text-white"
      >
        Saran
      </Link>
    </div>
  );
}
