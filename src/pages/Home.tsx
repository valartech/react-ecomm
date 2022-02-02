import { PhotosContext } from "../Context/Photos";
import { useContext } from "react";
import Image from "../components/Image";

function Home() {
  const { photos: allPhotos } = useContext(PhotosContext);
  return (
    <main className="grid-images">
      {allPhotos.map((photo, index) => (
        <Image photo={photo} key={photo.id} index={index} />
      ))}
    </main>
  );
}

export default Home;
