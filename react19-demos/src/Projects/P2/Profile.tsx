import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import Tabs from "./Tabs";

const Profile = () => {
  const [bannerurl, setbannerurl] = useState(
    "https://fakeimg.pl/1500x400?font=bebas"
  );
  const [profileurl, setprofileurl] = useState(
    "https://fakeimg.pl/150x150?font=bebas"
  );

  const handleBanerChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setbannerurl(URL.createObjectURL(file));
    }
  };

  const handleProfileChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setprofileurl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="relative w-[95%] ml-[5rem]">
      <div>
        <img
          src={bannerurl}
          alt="background"
          className="w-full h-60 object-cover"
        />
        <button className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="banner-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>
          <input
            type="file"
            id="banner-upload"
            accept="image/*"
            className="hidden"
            onChange={handleBanerChange}
          />
        </button>
      </div>
      {/* Profile Section */}
      <div className="relative flex items-center ml-4 mt-[-3rem]">
        <div className="relative w-40 h-40">
          <img
            src={profileurl}
            alt="Profile"
            className="w-40 h-40 object-cover rounded-full border-4 border-white"
          />
          <button className="absolute bottom-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
            <label htmlFor="profile-upload" className="cursor-pointer">
              <FaCamera size={20} />
            </label>
            <input
              type="file"
              id="profile-upload"
              accept="image/*"
              className="hidden"
              onChange={handleProfileChange}
            />
          </button>
        </div>
        {/* Channel Details */}
        <div className="ml-6 mt-14">
          <h1 className="text-2xl font-bold">Sidhu WebDev</h1>
          <p>1M views</p>
          <p className="mt-2">
            This is a short description of the YouTube channel. It gives an
            overview of the content and what viewers can expect.
          </p>
          <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500">
            Subscribe
          </button>
        </div>
      </div>
      <Tabs />
    </div>
  );
};

export default Profile;
