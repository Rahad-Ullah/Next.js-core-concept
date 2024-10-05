import Link from "next/link";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    next: {
      revalidate: 5,
    },
  });
  const shoes = await res.json();

  return (
    <div className="text-center max-w-screen-lg mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {shoes.map((item) => (
          <div key={item.id} className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {item.name}
                <div className="badge badge-secondary">${item.price}</div>
              </h2>
              <p>{item.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary btn-outline">Details</button>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link href="/all-shoes" className="btn btn-primary my-8">
        See More
      </Link>
    </div>
  );
};

export default HomePage;
