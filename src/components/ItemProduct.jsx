import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function ItemProduct({ name, image, precio }) {
  return (
    <>
      <div className="w-full  pb-5">
        <Link to={`product/${name}`}>
          <img className="w-full  lg:w-[90%] h-[210px] md:h-[290px] lg:h-[310px]"  src={image}  />
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
