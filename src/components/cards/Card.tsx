import Button from "../elements/Button";
import type { CardData } from "../../types/global";

interface CardProps extends CardData {
  onButtonClick: () => void;
}

function Card({
  title,
  description,
  buttonText,
  onButtonClick,
}: CardProps) {
  return (
    <article className="card">
      <h2>{title}</h2>

      <p>{description}</p>

      <Button
        text={buttonText}
        onClick={onButtonClick}
      />
    </article>
  );
}

export default Card;