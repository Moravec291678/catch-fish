import { useState } from "react";
import FishCard from "./components/FishCard";

export interface Fish {
  id: number;
  name: string;
  count: number;
}
function App() {
  const [fishes, setFishes] = useState<Fish[]>([
    { id: 1, name: "Kapr", count: 0 },
    { id: 2, name: "Štika", count: 0 },
    { id: 3, name: "Okoun", count: 0 },
    { id: 4, name: "Candát", count: 0 },
    { id: 5, name: "Sumec", count: 0 },
    { id: 6, name: "Lín", count: 0 },
    { id: 7, name: "Amur", count: 0 },
    { id: 8, name: "Pstruh", count: 0 },
  ]);
  const handleCount = (id: number, delta: number) => {
    if (id === fishes.id) {
      setFishes(prev => )
    }
  };

  return fishes.map((fish) => {
    return <FishCard fish={fish} key={fish.id} />;
  });
}

export default App;
