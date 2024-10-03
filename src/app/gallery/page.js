import Image from "next/image";

const GalleryPage = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl text-center my-16">Image Optimization</h1>
      <h3 className="text-2xl">Regular image tag</h3>
      <img
        src="https://images.ctfassets.net/23aumh6u8s0i/6pjUKboBuFLvCKkE3esaFA/5f2101d6d2add5c615db5e98a553fc44/nextjs.jpeg"
        alt=""
        className="mx-auto max-w-md"
      />
      <h3 className="text-2xl">Optimized image tags</h3>
      <Image
        src="https://images.ctfassets.net/23aumh6u8s0i/6pjUKboBuFLvCKkE3esaFA/5f2101d6d2add5c615db5e98a553fc44/nextjs.jpeg"
        width={500}
        height={300}
        alt=""
        className="mx-auto max-w-md"
      />
    </div>
  );
};

export default GalleryPage;
