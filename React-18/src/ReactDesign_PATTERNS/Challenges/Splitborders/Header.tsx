import { CgProfile } from "react-icons/cg";
const Header = () => {
  return (
    <div className="w-screen bg-lime-400 flex flex-row justify-between items-center   h-10 px-4 ">
      <h3 className="text-white ">My Dashboard</h3>
      <CgProfile className="text-white " />
    </div>
  );
};

export default Header;
