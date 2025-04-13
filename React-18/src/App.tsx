import ButtonFactory from "./ReactDesign_PATTERNS/Factory/Example-1/shared/ButtonFactory";
import Cardfactory from "./ReactDesign_PATTERNS/Factory/Example-2/shared/Cardfactory";

const App = () => {
  const imageCardData = {
    src: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=3903&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Placeholder Image",
  };
  const textCardData = {
    text: "This is a simple text card.",
  };

  const profileCardData = {
    name: "John Doe",
    bio: "A software engineer with a passion for React.",
    avatar:
      "https://images.unsplash.com/photo-1487349703519-90c8e4f426a7?q=80&w=3853&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  return (
    <div>
      <ButtonFactory type="primary" label="click me" />
      <ButtonFactory type="secondary" label="click me" />
      <ButtonFactory type="danger" label="click me" />
      <Cardfactory type="image" data={imageCardData} />
      <Cardfactory type="profile" data={profileCardData} />
      <Cardfactory type="text" data={textCardData} />
    </div>
  );
};

export default App;
