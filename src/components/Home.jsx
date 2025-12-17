import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/products');
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center">

      {/* Background Image */}
      <img 
        src="https://static.vecteezy.com/system/resources/previews/004/372/138/original/e-commerce-elements-doodle-set-isolated-on-white-background-illustration-vector.jpg"
        alt="E-commerce" 
        className="absolute inset-0 w-full h-full object-cover "
      />

    

      {/* Text + Button */}
      <div className="relative z-10 text-center text-black  px-4">
<h1 className="text-4xl md:text-6xl font-bold mb-6">
          
        </h1>
        <p className="text-3xl md:text-2xl mb-8">
         
        </p>
        <button 
          onClick={handleClick} 
          className="px-10 py-3  bg-blue-500 text-white rounded-full text-lg hover:bg-blue-600 transition mt-25 cursor-pointer"
        >
          Go to Products
        </button>
      </div>

    </div>
  );
}

export default Home;
