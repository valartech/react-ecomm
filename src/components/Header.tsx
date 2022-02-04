import { Link } from "react-router-dom";
import {
  ShoppingCartIcon as EmptyShoppingCartIcon,
  HeartIcon as EmptyHeartIcon,
} from "@heroicons/react/outline";
import {
  ShoppingCartIcon as FillShoppingCartIcon,
  HeartIcon as FilledHeartIcon,
} from "@heroicons/react/solid";
import { usePhoto } from "../Context/Photos";

function Header() {
  const { cartPhotos, favPhotos } = usePhoto();

  const ShoppingCartIcon =
    cartPhotos.length > 0 ? (
      <FillShoppingCartIcon className="w-8" />
    ) : (
      <EmptyShoppingCartIcon className="w-8" />
    );

  const HeartIcon =
    favPhotos.length > 0 ? (
      <FilledHeartIcon className="w-8" />
    ) : (
      <EmptyHeartIcon className="w-8" />
    );
  return (
    <header className="h-16 bg-slate-900 flex items-center px-5 justify-between shadow-md shadow-black">
      <Link to={"/"}>
        <h1 className="text-emerald-400 text-3xl font-bold tracking-wider">
          PicsCart
        </h1>
      </Link>

      <div className="flex space-x-4 items-center">
        <div className="text-emerald-400">
          <Link to={"/favourite"}>{HeartIcon}</Link>
        </div>
        <div className="text-emerald-400 relative">
          <Link to={"/cart"}>{ShoppingCartIcon}</Link>
          {cartPhotos.length > 0 && (
            <div className="bg-slate-700 absolute -top-2 -right-1 text-xs rounded-full w-5 h-5 flex justify-center items-center shadow-md shadow-black">
              {cartPhotos.length}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
