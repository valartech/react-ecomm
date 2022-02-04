import {
  HeartIcon as EmptyHeart,
  PlusCircleIcon,
} from "@heroicons/react/outline";
import {
  HeartIcon as FullHeart,
  ShoppingCartIcon,
} from "@heroicons/react/solid";
import { useState, useContext } from "react";
import { Photo } from "../utils/interfaces";
import { PhotosContext } from "../Context/Photos";

// import PropTypes from "prop-types";

function Image({ photo, index }: { photo: Photo; index: number }) {
  const { toggleIsFavourite, addToCart, cartPhotos, removeFromCart } =
    useContext(PhotosContext);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const HeartIcon = photo.isFavorite ? (
    <FullHeart
      className="w-4 text-emerald-400"
      onClick={() => {
        toggleIsFavourite(photo.id);
      }}
    />
  ) : (
    <EmptyHeart
      className="w-4"
      onClick={() => {
        toggleIsFavourite(photo.id);
      }}
    />
  );

  const CartIcon = () => {
    const isInCart = cartPhotos.some((cartPhoto) => cartPhoto.id === photo.id);
    return isInCart ? (
      <ShoppingCartIcon
        className="w-4 text-emerald-400"
        onClick={() => {
          removeFromCart(photo.id);
        }}
      />
    ) : (
      <PlusCircleIcon
        className="w-4"
        onClick={() => {
          addToCart(photo);
        }}
      />
    );
  };
  return (
    <div
      className={`${index % 5 === 0 && "big"} ${
        index % 6 === 0 && "wide"
      } relative hover:scale-105 transform cursor-pointer transition-all duration-300 hover:border-2 border-emerald-400 rounded group bg-black overflow-hidden`}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <img
        loading="lazy"
        src={photo.url}
        alt={photo.id}
        className="w-full h-full object-cover group-hover:opacity-40 transition-all duration-500 group-hover:scale-125 transform"
      />
      {isHovered && (
        <div className="absolute top-0 text-slate-200 flex space-x-2 p-2">
          {HeartIcon}
          {CartIcon()}
        </div>
      )}
    </div>
  );
}

/* Image.propTypes = {
  photo: PropTypes.object,
  index: PropTypes.number,
}; */

Image.defaultProps = {
  index: 1,
};

/* Not required as we are using typescript */

export default Image;
