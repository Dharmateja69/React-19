type ComponentType = "button" | "card" | "modal";

interface ComponentMap {
  button: {
    type: "button";
    props: ButtonProps;
  };
  card: {
    type: "card";
    props: CardProps;
  };
  modal: {
    type: "modal";
    props: ModalProps;
  };
}

export type ComponentConfig = ComponentMap[keyof ComponentMap];
