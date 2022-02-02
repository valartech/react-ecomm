import { Link } from "react-router-dom";
import { ShoppingCartIcon as EmptyShoppingCartIcon } from "@heroicons/react/outline";
import { ShoppingCartIcon as FillShoppingCartIcon } from "@heroicons/react/solid";
import { PhotosContext } from "../Context/Photos";
import { useContext } from "react";

function Header() {
  const { cartPhotos } = useContext(PhotosContext);

  const ShoppingCartIcon =
    cartPhotos.length > 0 ? (
      <FillShoppingCartIcon className="w-8" />
    ) : (
      <EmptyShoppingCartIcon className="w-8" />
    );

  return (
    <header className="h-16 bg-slate-900 flex items-center px-5 justify-between shadow-md shadow-black">
      <Link to="/">
        <h1 className="text-emerald-400 text-3xl font-bold tracking-wider">
          PicsCart
        </h1>
      </Link>

      <div className="text-emerald-400">
        <Link to="/cart">{ShoppingCartIcon}</Link>
      </div>
    </header>
  );
}

export default Header;
