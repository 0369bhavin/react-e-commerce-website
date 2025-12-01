import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import Loder from "./Loder";


function SingleProduct() {
  const navigate= useNavigate()
  
  const { id } = useParams();
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const fetchData = () => {

    setLoading(true);
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (loading) return <Loder />;
  

  return (
    <>

    <div className="bg-black rounded-lg text-white p-4 group">

      {/* Image */}
      <img
        src={products ?.image}
        alt={products?.title}
        className=" m-auto aspect-square object-contain p-4  group-hover:scale-90 transition-all duration-400"
      />

      {/* Title */}
      <h2 className="text-4xl font-semibold mt-2 group-hover:text-blue-400 text-center mb-3">
        {products?.title}
      </h2>

      {/* Rating */}
      <div className=" items-center gap-2 mt-2 flex flex-col">
        <div className="flex items-center gap-1 bg-green-500 text-white px-3 py-1 rounded-full">
          <span className="text-yellow-300 text-lg">⭐</span>
          <span>{products?.rating.rate}</span>
        </div>
        <span className="text-gray-300 text-xl">
          {products?.rating.count} reviews
        </span>
      </div>

      {/* Price */}
      <p className="text-green-400 font-bold text-2xl text-center mt-3 ">
        ${products?.price}
      </p>
      <p className="text-2xl text-center mt-3">{products?.description}</p>
   </div>
   <div className="flex justify-center bg-black">
  <button onClick={() => navigate(`/Payment/${products?.id}`)}  className="text-white font-semibold bg-green-400 rounded-xl py-2 px-4 currser-ponter">
    BUY NOW {products?.price}
  </button>
</div>
    </>
  );
}

export default SingleProduct;
