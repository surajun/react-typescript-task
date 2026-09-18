interface ButtonProps {
  text: string;
  onClick: () => void; // Function called when button is clicked
  type?: "button" | "submit" | "reset";// ? means optional
}

function Button({
  text,
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      className="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;