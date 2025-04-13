import Cardcontent from "./usingcompoundcomponent/Cardcontent";
import Cardfooter from "./usingcompoundcomponent/Cardfooter";
import Cardtitle from "./usingcompoundcomponent/Cardtitle";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border rounded-lg shadow-lg w-[20rem] p-4 bg-white">
      {children}
    </div>
  );
};
Card.title = Cardtitle;
Card.Content = Cardcontent;
Card.footer = Cardfooter;

export default Card;
