import SingleProduct from "./SingleProduct";
import img1 from "/images/prod/1.png";
import img2 from "/images/prod/2.png";
import img3 from "/images/prod/3.png";
import img4 from "/images/prod/4.png";
const ProductsList = () => {
  return (
    <div className="mx-auto flex flex-col items-center overflow-x-scroll">
      <h2 className="text-4xl">More value from </h2>
      <h2 className="text-4xl underline text-primary my-5">this Flowers</h2>
      <div className="flex gap-5 justify-end">
        <span className="border-b-2 border-primary text-primary">previous</span>
        <span className="border-b-2 border-primary text-primary">next</span>
      </div>
      <div className="flex flex-nowrap gap-10 justify-center">
        <SingleProduct image={img4} title="Jasmine Flowers" price="$258" />
        <SingleProduct image={img1} title="Lily Flowers" price="$258" />
        <SingleProduct image={img2} title="Rose Flowers" price="$258" />
        <SingleProduct image={img3} title="Amaris Flowers" price="$258" />
      </div>
    </div>
  );
};

export default ProductsList;
