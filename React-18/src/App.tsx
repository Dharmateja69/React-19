import Card from "./ReactDesign_PATTERNS/Compoundcomponent/Card";

const App = () => {
  return (
    <div>
      <Card>
        <Card.title>Something Title for the card</Card.title>
        <Card.Content>Something Content for the card</Card.Content>
        <Card.footer>Something Footer for the card</Card.footer>
      </Card>
    </div>
  );
};

export default App;
