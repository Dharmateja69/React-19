import UseCard from "./UseCard";

const peopletofollow = [
  { name: "Alena Gouse", following: false },
  { name: "Ruben Bator", following: true },
  { name: "Aspen Stanton", following: false },
  { name: "Madelyn George", following: false },
];

const PeopleToFollow = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold text-lg mb-4">People to follow</h3>
      <div className="space-y-4">
        {peopletofollow.map((person, index) => (
          <UseCard key={index} person={person} index={0} />
        ))}
      </div>
    </div>
  );
};

export default PeopleToFollow;
