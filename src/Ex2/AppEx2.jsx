import Button from "../Ex1/components/Button";
import DismissibleAlert from "./components/DismissibleAlert";
import { useState } from "react";

export default function AppEx2() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      {showAlert && (
        <DismissibleAlert onCloseHandler={() => setShowAlert(false)}>
          This is the alert!
        </DismissibleAlert>
      )}
      <Button style="secondary" onClickHandler={() => setShowAlert(true)}>
        Click me!
      </Button>
    </>
  );
}
