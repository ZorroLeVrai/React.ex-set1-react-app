import Button from "./components/Button";

export default function AppEx1() {
  return (
    <Button style="secondary" onClickHandler={() => console.log("Clicked!")}>
      Click me!
    </Button>
  );
}
