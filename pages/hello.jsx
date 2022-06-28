import { getCookie } from "@/libs/cookie";

export default function Hello(){
    return getCookie("sb-access-token");
}
