import { useContext, useState } from "react";
import { PhotosContext } from "../Context/Photos";
import { MinusCircleIcon } from "@heroicons/react/outline";

function Cart() {
  const { cartPhotos, removeFromCart, clearCart } = useContext(PhotosContext);
  const [buttonText, setButtonText] = useState<string>("Place Order");
  const placeOrder = () => {
    if (cartPhotos.length > 0) {
      setButtonText("Ordering ...");
      setTimeout(() => {
        clearCart();
        setButtonText("Place Order");
      }, 3000);
    }
  };
  return (
    <div className="flex flex-col space-y-5 mx-auto max-w-sm p-5 ">
      <h1 className="text-center text-2xl font-bold tracking-wider uppercase">
        Checkout
      </h1>
      {cartPhotos.map((photo) => (
        <div
          key={photo.id}
          className="max-w-xs flex justify-between bg-slate-700 items-center py-3 px-5 rounded-md shadow-lg shadow-slate-900 relative"
        >
          <img
            src={photo.url}
            className="w-32 h-32 object-cover shadow shadow-slate-900"
            alt={photo.id}
          />
          <p>$5.99</p>
          <MinusCircleIcon
            className="absolute top-2 right-2 w-5"
            onClick={() => {
              removeFromCart(photo.id);
            }}
          />
        </div>
      ))}
      {cartPhotos.length === 0 ? (
        <p className="text-center text-xl text-emerald-400">No Items in cart</p>
      ) : (
        <>
          <p className="text-center">
            Total Price : {5.99 * cartPhotos.length}
          </p>
          <div
            className="bg-emerald-400 w-36 self-center px-5 py-3 text-center rounded-lg text-slate-900 font-medium tracking-wide cursor-pointer hover:bg-emerald-500 transition-colors duration-300"
            onClick={placeOrder}
          >
            {buttonText}
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
