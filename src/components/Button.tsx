interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger" | "success"; // optional
  onBeingClicked: () => void;
}

function Button({ children, color = "primary", onBeingClicked }: Props) {
  return (
    <button className={`btn btn-${color}`} onClick={() => onBeingClicked()}>
      {children}
    </button>
  );
}

export default Button;
