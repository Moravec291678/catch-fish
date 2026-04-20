import type { Fish } from "../App";

interface Props {
  fish: Fish;
}
function FishCard({ fish }: Props) {
  return (
    <div className="fish-card">
      <span className="fish-name">{fish.name}</span>
      <span className="fish-name">{fish.count}</span>
      <div className="buttons">
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  );
}

export default FishCard;
