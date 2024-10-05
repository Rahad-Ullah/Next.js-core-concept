import Image from "next/image";
import nextImage from "../../assets/Screenshot 2024-08-27 104555.jpg";

export const metadata = {
  title: "Gallery | Example.com",
  description: "This is gallery page",
};

const GalleryPage = () => {
  
  return (
    <div className="text-center">
      <h1 className="text-4xl text-center my-16">Image Optimization</h1>
      <h3 className="text-2xl my-4">Regular image tag</h3>
      <img
        src="https://images.ctfassets.net/23aumh6u8s0i/6pjUKboBuFLvCKkE3esaFA/5f2101d6d2add5c615db5e98a553fc44/nextjs.jpeg"
        alt=""
        className="mx-auto max-w-md"
      />
      <h3 className="text-2xl my-4">Optimized image tags</h3>
      <Image
        src="https://images.ctfassets.net/23aumh6u8s0i/6pjUKboBuFLvCKkE3esaFA/5f2101d6d2add5c615db5e98a553fc44/nextjs.jpeg"
        width={500}
        height={300}
        alt=""
        className="mx-auto max-w-md"
      />
      <h3 className="text-2xl my-4">Next image</h3>
      <Image
        src={nextImage}
        width={500}
        height={300}
        alt=""
        className="mx-auto max-w-md"
      />
    </div>
  );
};

export default GalleryPage;
