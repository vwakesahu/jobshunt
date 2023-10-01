import React from "react";

const SubscribeComponent = () => {
  return (
    <div
      className="relative md:p-8 md:px-48 w-full p-7 bg-lightGray text-white md:py-24 flex md:flex-row flex-col gap-6 justify-center"
      style={{
        backgroundImage: 'url("your-image-url.jpg")',
        backgroundPosition: "bottom right",
        backgroundSize: "cover",
      }}
    >
      <div>
        <p className="text-2xl font-semibold">Get New Jobs Notification!</p>
        <p className="text-sm text-lighttextGray">
          Subscribe & get all related jobs notification.
        </p>
      </div>
      <div className="hidden md:flex h-auto ">
        <input
          type="text"
          className="min-w-[300px] px-6 py-3 border-[0.2px] border-lighttextGray bg-transparent border-r-0 rounded-l-lg focus:outline-none"
          placeholder="Enter Your Email"
        />
        <button className="px-6 py-3 bg-lightBlue rounded-r-lg border border-lightBlue">
          Subscribe
        </button>
      </div>

      {/* FOR MOBILES */}
      <div className="md:hidden">
        <input
          type="text"
          className="w-full bg-transparent border-[0.2px] border-lighttextGray rounded-lg py-2 focus:outline-none px-3 "
          placeholder="Enter Your Email"
        />
        <button className="w-full bg-lightBlue px-3 py-2 rounded-lg mt-2">
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default SubscribeComponent;
