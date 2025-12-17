import {NavLink} from 'react-router-dom';
    function Navbar() { 

    return (
        <>
        <div className="text-2xl flex gap-10 bg-black text-amber-50 p-4 flex-center">
            <img className=" w-15 h-15 rounded-full" src="https://masterbundles.com/wp-content/uploads/2023/02/p-679.jpg" alt="logo"/>
            <NavLink className={({isActive}) => isActive ? "text-yellow-300" : ""} to ="/">Home</NavLink>
            <NavLink className={({isActive}) => isActive ? "text-yellow-300" : ""} to ="/products">Products</NavLink>
        </div>
        </>
    );
}

export default Navbar;
 