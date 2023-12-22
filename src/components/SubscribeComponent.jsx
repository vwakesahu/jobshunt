import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Loader from "./Loader";

const SubscribeComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [gotResponse, setGotResponse] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_6bjaowx",
        "template_9o3g8su",
        form.current,
        "NcULCO2MwqMaY-D7N"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          setGotResponse(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    console.log("Clicked");
  };
  return (
    <div className="relative md:p-8 md:px-48 w-full p-7 bg-lightGray text-white md:py-24 flex md:flex-row flex-col gap-6 justify-center">
      <div>
        <p className="text-2xl font-semibold">Get New Jobs Notification!</p>
        <p className="text-sm text-lighttextGray">
          Subscribe & get all related jobs notification.
        </p>
      </div>
      <div className="hidden md:flex h-auto ">
        {gotResponse ? (
          <div className="flex items-center justify-center">
            <p className="border border-white px-4 py-2 rounded-lg">
              Hehe, I have your mail now!😌
            </p>
          </div>
        ) : (
          <form
            ref={form}
            onSubmit={sendEmail}
            action="#"
            method="POST"
            className=" w-full"
          >
            <input
              type="email"
              className="min-w-[300px] px-6 py-3 border-[0.2px] border-lighttextGray bg-transparent border-r-0 rounded-l-lg focus:outline-none"
              placeholder="Enter Your Email"
            />
            <input
              type="submit"
              value={isLoading ? "Loading..." : "Subscribe"}
              className="px-6 py-3 bg-lightBlue rounded-r-lg border-2 border-lightBlue cursor-pointer"
            />
          </form>
        )}
      </div>

      {/* FOR MOBILES */}
      <div className="md:hidden">
        <form
          ref={form}
          onSubmit={sendEmail}
          action="#"
          method="POST"
          className=" w-full"
        >
          <input
            type="text"
            className="w-full bg-transparent border-[0.2px] border-lighttextGray rounded-lg py-2 focus:outline-none px-3 "
            placeholder="Enter Your Email"
          />
          <button
            className="w-full bg-lightBlue px-3 py-2 rounded-lg mt-2 flex items-center justify-center"
            onClick={() => {
              setIsLoading(true);
              console.log("Loading");
            }}
          >
            {isLoading ? "Loading..." : "Subscribe Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeComponent;
