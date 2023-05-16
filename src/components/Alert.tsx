import { ReactNode, useState } from "react";
import Button from "./Button";

interface Props {
  children: ReactNode;
}

function Alert({ children }: Props) {
  const [alert, setAlert] = useState(false);
  const onBeingClicked = () => {
    if (!alert) {
      setAlert(true);
    } else {
      setAlert(false);
    }
  };
  const color = "secondary";
  return (
    <div className="alert alert-primary">
      {children}
      {alert && (
        <div>
          <div
            className="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            <strong>Holy guacamole!</strong> You should check in on some of
            those fields below.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={onBeingClicked}
            ></button>
          </div>
        </div>
      )}
      <Button onBeingClicked={onBeingClicked} color={color}>
        Hello World
      </Button>
    </div>
  );
}

export default Alert;
