//In this factory pattern we can render the components which are required .so generaly we use the switch key for this factory pattern.

import Danger from "../components/Danger";
import Primary from "../components/Primary";
import Secondary from "../components/Secondary";

interface ButtonFactoryProps {
  type: string;
  label: string;
}

const ButtonFactory = ({ type, label }: ButtonFactoryProps) => {
  switch (type) {
    case "primary":
      return <Primary label={label} />;
    case "secondary":
      return <Secondary label={label} />;
    case "danger":
      return <Danger label={label} />;
    default:
      return <button>{label}</button>;
  }
};

export default ButtonFactory;
