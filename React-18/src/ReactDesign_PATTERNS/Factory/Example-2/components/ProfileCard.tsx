interface profileprops {
  name: string;
  avatar: string;
  bio: string;
}

const ProfileCard = ({ name, avatar, bio }: profileprops) => {
  return (
    <div className="w-[250px] h-[250px] border border-solid text-white">
      <h2 className="text-black">{name}</h2>
      <img src={avatar} alt={name} />
      <p className="text-black">{bio}</p>
    </div>
  );
};

export default ProfileCard;
