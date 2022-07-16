import { useState } from "react";
import Image from "next/future/image";
import { MdRemoveCircleOutline } from "react-icons/md";
import { Layout, Gradient, SEO, Button } from "@components";
import Form from "@/componentsAuth/Form";
import Input from "@/componentsAuth/Input";
import ButtonSubmit from "@/componentsAuth/Button";
import { SubmitImage } from "@/libs/submitImage";
import { SubmitAuthor } from "@/libs/submitAuthor";
export default function CreateAuthor() {
  const [author, setAuthor] = useState({});
  const [selectedImage, setSelectedImage] = useState();
  const fileExt = selectedImage?.name.split(".")[1];
  const { name, job, instagram, avatar } = author;
  const imageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const removeSelectedImage = () => {
    setSelectedImage();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await SubmitImage(author.name, fileExt, selectedImage).then(({ Key }) =>
      SubmitAuthor(name, job, instagram, Key)
    );
  };
  return (
    <>
      <SEO title="Create Author" />
      <div className="relative">
        <Gradient />
        <Layout>
          <Form name="Create Author" onSubmit={handleSubmit}>
            <Input
              name="Name"
              aria-label="enter your name"
              value={author.name}
              placeholder="Enter your name..."
              onChange={(e) => setAuthor({ ...author, name: e.target.value })}
            />
            <Input
              name="Job"
              aria-label="enter job"
              value={author.job}
              placeholder="Enter your job..."
              onChange={(e) => setAuthor({ ...author, job: e.target.value })}
            />
            <Input
              name="Instagram"
              aria-label="enter instagran"
              value={author.instagram}
              placeholder="Enter your instagram username..."
              onChange={(e) =>
                setAuthor({ ...author, instagram: e.target.value })
              }
            />
            <Input
              name="Avatar"
              type="file"
              id="avatar"
              accept="image/png, image/jpeg"
              aria-label="enter avatar"
              onChange={imageChange}
            />
            {selectedImage && (
              <div className="relative">
                <Image
                  src={URL.createObjectURL(selectedImage)}
                  alt="Thumb"
                  className="my-4 rounded-lg"
                />
                <Button
                  type="button"
                  className="absolute top-0 right-0 m-3"
                  size="small"
                  variant="solidYellow"
                  onClick={removeSelectedImage}
                >
                  <MdRemoveCircleOutline />
                </Button>
              </div>
            )}
            <ButtonSubmit type="submit" name="Create Author" />
          </Form>
        </Layout>
      </div>
    </>
  );
}
