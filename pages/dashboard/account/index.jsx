import { useUser } from "@/context/user";

export default function Acoount(){
  const {user} = useUser()
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text center flex justify-center">
          Hello, <span className="font-semibold text-primary-600">{user?.username}</span>{" "}
        </p>
      </div>
    ); 
}