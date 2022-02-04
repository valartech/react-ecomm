import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import FavouritePhotos from "./pages/FavouritePhotos";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/favourite"} element={<FavouritePhotos />} />
        <Route path={"/cart"} element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
