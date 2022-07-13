import href from "@/data/href";
import { Link } from "@components";

export default function Dashboard() {
  return (
    <div className="flex h-screen items-center justify-center gap-2">
        <Link href={href.authors} className="bg-primary-800 px-3 py-2 text-white rounded-lg">
            Author
        </Link>
        <Link href={href.account} className="bg-primary-800 px-3 py-2 text-white rounded-lg">
            Account
        </Link>
        <Link href={href.saran} className="bg-primary-800 px-3 py-2 text-white rounded-lg">
            Saran
        </Link>
    </div>
  );
}
