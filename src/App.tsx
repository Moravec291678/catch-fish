import { useState } from "react";
import FishCard from "./components/FishCard";

export interface Fish {
  id: number;
  name: string;
  count: number;
  image?: string;
}
function App() {
  const [fishes, setFishes] = useState<Fish[]>([
    { id: 1, name: "Kapr", count: 0, image: "https://png.pngtree.com/png-vector/20250321/ourmid/pngtree-common-carp-fish-png-image_15809300.png" },
    { id: 2, name: "Štika", count: 0, image: "https://png.pngtree.com/png-clipart/20231116/original/pngtree-pike-white-background-photo-png-image_13575531.png" },
    { id: 3, name: "Okoun", count: 0, image: "https://png.pngtree.com/png-vector/20231001/ourmid/pngtree-walleye-or-zander-horizontal-png-image_10056213.png" },
    { id: 4, name: "Candát", count: 0, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Sander_lucioperca.png/320px-Sander_lucioperca.png" },
    { id: 5, name: "Sumec", count: 0, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Silurus_glanis.png/320px-Silurus_glanis.png" },
    { id: 6, name: "Lín", count: 0, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Tinca_tinca.png/320px-Tinca_tinca.png" },
    { id: 7, name: "Amur", count: 0, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Ctenopharyngodon_idella.png/320px-Ctenopharyngodon_idella.png" },
    { id: 8, name: "Pstruh", count: 0, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Salmo_trutta.png/320px-Salmo_trutta.png" },
  ]);
  function handleCount(id: number, delta: number) {
    setFishes(prev => prev.map((fish) => {
      return fish.id === id ? { ...fish, count: Math.max(0, fish.count + delta) } : fish
    }))
  };

  return (<>
    {fishes.map((fish) => {
      return <FishCard handleCount={handleCount} fish={fish} key={fish.id} />;
    })}
    <div className="total">
      <img src={"https://www.rpzlatastika.cz/fotky83127/fotos/_vyr_9659_GetImage.png"} alt="podberak" />

      {fishes.reduce((acc, fish) => acc + fish.count, 0)}
    </div>
  </>)

}
export default App;
