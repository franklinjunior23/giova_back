import { Link } from "react-router-dom";

function ItemProduct({ name, image, precio }) {
  return (
    <>
      <div className="w-full xl:w-[350px] pb-5">
        <Link to={`product/${name}`}>
          <img className="hover:grow hover:shadow-lg w-full "  src={image}  />
          <div className="pt-3 flex justify-between">
            <p className="overflow-ellipsis lg:text-xl">{name}</p>
          </div>
          <p className="pt-1 text-gray-900 lg:text-xl">$ {precio}</p>
        </Link>
      </div>
    </>
  );
}

export default ItemProduct;
