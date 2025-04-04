import { FaUserCircle } from "react-icons/fa";

const ProfileCard = () => {
  const user = {
    name: "John Doe",
    balance: "$12,450",
    transactions: 27,
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4 dark:bg-gray-800">
      <FaUserCircle className="text-5xl text-gray-500 dark:text-gray-300" />
      <div>
        <h2 className="text-lg font-bold text-gray-800 dark:text-white">
          {user.name}
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Balance: <span className="font-semibold">{user.balance}</span>
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          Transactions:{" "}
          <span className="font-semibold">{user.transactions}</span>
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
