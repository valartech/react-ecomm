import {
  ReactElement,
  createContext,
  useEffect,
  useState,
  useContext,
} from "react";
import { Photo } from "../utils/interfaces";
import axios from "axios";

const photos: Photo[] = [];
const favPhotos: Photo[] = [];
const cartPhotos: Photo[] = [];
const PhotosContext = createContext({
  photos,
  cartPhotos,
  favPhotos,
  toggleIsFavourite: (value: string) => {
    return;
  },
  addToCart: (value: Photo) => {
    return;
  },
  removeFromCart: (value: string) => {
    return;
  },
  clearCart: () => {
    return;
  },
});
function PhotosContextProvider({ children }: { children: ReactElement }) {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

  // https://picsum.photos/v2/list
  const [cartPhotos, setCartPhotos] = useState<Photo[]>([]);
  const [favPhotos, setFavPhotos] = useState<Photo[]>([]);
  const addToCart = (photo: Photo) => {
    setCartPhotos((prevCart) => [...prevCart, photo]);
  };
  const removeFromCart = (id: string) => {
    setCartPhotos((prevCart) =>
      prevCart.filter((cartPhoto) => cartPhoto.id !== id)
    );
  };
  const toggleIsFavourite = (id: string) => {
    const newPhotos = photos.map((photo) => {
      if (photo.id === id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite,
        };
      }
      return photo;
    });
    setPhotos(newPhotos);
    setFavPhotos(newPhotos.filter((photo) => photo.isFavorite));
  };

  const clearCart = () => {
    setCartPhotos([]);
  };

  useEffect(() => {
    axios.get(url).then((response) => {
      setPhotos(response.data);
    });
  }, []);
  return (
    <PhotosContext.Provider
      value={{
        photos,
        toggleIsFavourite,
        cartPhotos,
        addToCart,
        removeFromCart,
        clearCart,
        favPhotos,
      }}
    >
      {children}
    </PhotosContext.Provider>
  );
}

const usePhoto = () => {
  return useContext(PhotosContext);
};

export { PhotosContextProvider, PhotosContext, usePhoto };
