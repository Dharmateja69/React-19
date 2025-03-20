import { FaUserCircle } from "react-icons/fa";

interface Person {
  name: string;
  following: boolean;
}

interface UserCardsprops {
  index: number;
  person: Person;
}
const UseCard = ({ index, person }: UserCardsprops) => {
  return (
    <div className="flex items-center justify-between">
      <section className="flex items-center">
        <FaUserCircle className="text-3xl mr-3 text-gray-500" />
        <span>{person.name}</span>
      </section>
      <button
        className={`rounded-full px-6 py-3 text-balance ${
          person.following
            ? "bg-black text-white"
            : "bg-gray-500 text-black hover:bg-red-500 hover:text-white"
        }`}
      >
        {person.following ? "Following" : "Follow"}
      </button>
    </div>
  );
};

export default UseCard;
