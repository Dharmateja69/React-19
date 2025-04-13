import { Button } from "./Button";
import { Card } from "./Card";
import { ComponentConfig } from "./ComponentType";
import { Modal } from "./Modal";

export const ComponentFactory = (config: ComponentConfig) => {
  switch (config.type) {
    case "button":
      return <Button {...config.props} />;
    case "card":
      return <Card {...config.props} />;
    case "modal":
      return <Modal {...config.props} />;
    default:
      return null;
  }
};
