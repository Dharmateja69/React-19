import ImageCrad from "../components/ImageCrad";
import ProfileCard from "../components/ProfileCard";
import TextCard from "../components/TextCard";

const Cardfactory = ({ type, data }: any) => {
  switch (type) {
    case "image":
      return <ImageCrad src={data.src} name={data.alt} />;
    case "text":
      return <TextCard name={data.text} />;
    case "profile":
      return (
        <ProfileCard name={data.name} bio={data.bio} avatar={data.avatar} />
      );
    default:
      return <div>Unkonuwn page !</div>;
  }
};

export default Cardfactory;
