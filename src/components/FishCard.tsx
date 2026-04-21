import { type Fish } from "../App";

interface Props {
  fish: Fish;
  handleCount: (id: number, delta: number) => void;
}
function FishCard({ handleCount, fish }: Props) {
  return (
    <div className="fish-card">
      <img src={fish.image} alt={fish.name} />
      <span className="fish-name">{fish.name}</span>
      <span className="fish-name">{fish.count}</span>
      <div className="buttons">
        <button onClick={() => handleCount(fish.id, 1)}>+</button>
        <button onClick={() => handleCount(fish.id, -1)}>-</button>
      </div>
    </div>
  );
}

export default FishCard;
