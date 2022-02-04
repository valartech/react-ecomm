import Image from "../components/Image";
import { usePhoto } from "../Context/Photos";

function FavouritePhotos() {
  const { favPhotos } = usePhoto();
  return (
    <main className="my-5">
      <h1 className="text-center text-4xl font-medium tracking-wider text-emerald-400 uppercase">
        My Favorite Photos
      </h1>
      {favPhotos.length > 0 ? (
        <div className="grid-images-fav">
          {favPhotos.map((photo, index) => (
            <Image photo={photo} key={photo.id} index={index} />
          ))}
        </div>
      ) : (
        <div className="text-center my-20 text-2xl font-bold tracking-widest text-emerald-500 border border-emerald-300 max-w-min mx-auto whitespace-nowrap p-5 rounded-lg shadow-xl shadow-slate-900">
          No Favourite Photos
        </div>
      )}
    </main>
  );
}
export default FavouritePhotos;
