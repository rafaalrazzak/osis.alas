import Form from "@/componentsAuth/Form";
import Input from "@/componentsAuth/Input";
import Button from "@/componentsAuth/Button";
import {useRouter} from "next/router";

export default function Hello(){
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <Form name="hello">
        <Input name="name" />
        
      </Form>
    </div>
  );
}