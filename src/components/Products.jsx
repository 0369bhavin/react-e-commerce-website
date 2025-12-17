import axios from "axios";
import  { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import Loder from './Loder'

function Products() {
  const [products, setProducts] = useState([]);
  const[loding,Setloding]=useState(false)

  const fetchData = () => {
    Setloding(true)
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        Setloding(false)
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);
if(loding)return<Loder/>

  return (
    <div className="grid grid-cols-5 max-[1200px]:grid-cols-4 max-[900px]:grid-cols-3 max-[600px]:grid-cols-2 gap-4 p-6 cursor-pointer">
      {products.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
}

function ProductCard({ item }) {
 const navigate= useNavigate()

  return (
    <div onClick={() => navigate(`/products/${item.id}`)}
 className="bg-black rounded-lg text-white p-4 group">
      <img
        src={item.image}
        alt={item.title}
        className="aspect-square object-contain p-4 w-full group-hover:scale-90 transition-all duration-400"
      />

      <h2 className="text-sm font-semibold mt-2 line-clamp-2 group-hover:text-blue-400">{item.title}</h2>

      {/* Rating */}
      <div className="flex items-center gap-2 mt-2">
        <div className="flex items-center gap-1 bg-green-500 text-white px-3 py-1 rounded-full">
          <span className="text-yellow-300 text-lg">⭐</span>
          <span>{item.rating.rate}</span>
        </div>
        <span className="text-gray-300 text-sm">{item.rating.count}</span>
      </div>

      <p className="text-green-400 font-bold text-lg mt-3">${item.price}</p>
      
    </div>
    
  );
}

export default Products;
