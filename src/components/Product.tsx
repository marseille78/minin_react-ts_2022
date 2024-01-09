import { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
  product: IProduct;
}

function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false);

  const btnBgClassName = details ? "bg-yellow-400" : "bg-blue-400";
  const btnCls = [
    "py-2 px-4 border",
    btnBgClassName
  ];

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={product.image} className="w-1/6" alt={product.title} />
      <p>{product.title}</p>
      <p className="font-bold">{product.price}</p>
      <button className={btnCls.join(" ")} onClick={() => setDetails((prev) => !prev)}>
        {details ? "Hide Details" : "Show Details"}
      </button>
      {/* <button className="py-2 px-4 border bg-blue-400" onClick={() => setDetails(false)}>Hide Details</button> */}

      {
        details &&
        <div>
          <p>{product.description}</p>
          <p>Rate: <span style={{fontWeight: 700}}>{product?.rating?.rate}</span></p>
        </div>
      }
    </div>
  );
}

export default Product;
