import { Link } from "react-router-dom";

function ItemProduct({ name, image, precio }) {
  return (
    <>
      <div className="w-full  pb-5">
        <Link to={`product/${name}`}>
          <img className=""  src={image}  />
          <div className="pt-3 flex justify-between">
            <p className="overflow-ellipsis lg:text-base">{name}</p>
          </div>
          <p className="pt-1 text-gray-900 lg:text-lg">$ {precio}</p>
        </Link>
      </div>
    </>
  );
}

export default ItemProduct;
