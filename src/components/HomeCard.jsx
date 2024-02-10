import React, { useState } from "react";
import Lottie from "lottie-react";
import CustomButton from "./CustomButton";
import NotFound from "../img/nonfound.svg";
import { Link, useNavigate } from "react-router-dom";
import Demo from "./Demo";

const HomeCard = ({
  title,
  subTitle,
  type,
  organization,
  shift,
  requirements,
  img,
  telegramUrl,
  data,
}) => {
  const [items, setItems] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [textw, setText] = useState("");
  const navigate = useNavigate();
  const allApplyNowMessages = [
    "Whoa, slow down there turbo! Clicking 'Apply Now' so many times won't summon a job genie. It's more likely to make your keyboard file a harassment complaint.",
    "Easy on the clicks, Einstein! 'Apply Now' is not a stress ball, and your mouse is not a therapy session. Save it for the resume, not the button!",
    "Impatient much? Clicking 'Apply Now' like it owes you money won't make your dream job appear any faster. It might, however, give your mouse a panic attack.",
    "Hold your horses! Rapidly clicking 'Apply Now' won't expedite your application. It's not a turbo boost button; it's more of a 'chill and apply' situation.",
    "Breaking news: Clicking 'Apply Now' repeatedly doesn't make you CEO faster. It's more likely to make you the undisputed champion of mouse-clicking marathons.",
    "Easy on the caffeine, buddy! Clicking 'Apply Now' like it's a game of whack-a-mole won't impress recruiters. Save some energy for the actual job hunt!",
    "Impressive finger speed, but alas, 'Apply Now' isn't a race. Rapid clicking won't make your dream job pop out like a jackpot. It might, however, make your mouse cry for mercy.",
    "Hold up! Clicking 'Apply Now' like it owes you rent won't make HR respond any quicker. It's not a magic button; it's more like a 'patience is a virtue' situation.",
    "Easy there, Maverick! Rapidly clicking 'Apply Now' won't make you the Top Gun of job applications. It might, however, earn you a spot in the Mouse Olympics.",
    "Take it easy on the click-finger gym! Rapidly pressing 'Apply Now' won't turn you into the Hulk of job hunting. It's more likely to turn your mouse into a tiny, overworked intern.",
    "Whoa, tiger! Clicking 'Apply Now' like it owes you a date won't win you any favor with the HR Cupid. Slow and steady wins the job-hunting race!",
    "Hold your clicker, Speedy Gonzales! 'Apply Now' isn't a race car, and your mousepad isn't a track. You're more likely to get a speeding ticket than a job offer.",
    "Easy on the clickstorm! 'Apply Now' is feeling a bit overwhelmed, and your mouse is threatening to file for click harassment. Give it some breathing space!",
    "Calm down, Captain Clickalot! Rapidly clicking 'Apply Now' won't make you the hero Gotham needs. It might, however, make you the protagonist of a mouse rebellion.",
    "Impressive click-fu! But 'Apply Now' is not a dragon you're trying to slay. Ease up, and let your resume be the knight in shining armor.",
    "Hold the clicker, Flash! 'Apply Now' isn't a time machine, and your job offer won't arrive yesterday. You're more likely to get a one-way ticket to the 'Spam' folder.",
    "Easy on the trigger finger, Neo! Rapidly clicking 'Apply Now' won't warp you into the Matrix of job success. It might, however, glitch your application into cyberspace.",
    "Whoa, cowboy! Clicking 'Apply Now' like it's a rodeo won't make you the sheriff of employment. You're more likely to lasso a tumbleweed than a job offer.",
    "Hold your horses, Clicksperanto! Rapidly clicking 'Apply Now' won't translate your resume into the language of dream jobs. It might, however, teach your mouse to roll its eyes in frustration.",
    "Easy on the clicker-coaster! 'Apply Now' isn't a rollercoaster, and your resume isn't a ticket. You're more likely to end up with motion sickness than a job offer.",
    "Why bother with 'Apply Now' when you can click 'Train Your Pet Rock'? It's a more exciting challenge, and your rock won't judge your résumé.",
    "Feeling bored? Instead of 'Apply Now,' click 'Learn to Juggle.' It's more productive than waiting for that dream job to call.",
    "Who needs 'Apply Now' when you can click 'Master the Art of Spoon Balancing'? It might not get you a job, but it's a skill worth bragging about.",
    "Consider this: Instead of 'Apply Now,' click 'Perfect Your Accordion Skills.' You never know when a one-man band might be in demand.",
    "Tired of the job hunt? Click 'Become a Llama Whisperer' instead of 'Apply Now.' Llamas are excellent listeners, and they won't critique your cover letter.",
    "Why stress over 'Apply Now' when you can click 'Learn the Ancient Art of Potato Printing'? Spoiler alert: Your spud creations won't demand references.",
    "Feeling overwhelmed? Click 'Train Your Houseplant to Breakdance' instead of 'Apply Now.' Your leafy friend won't criticize your career choices.",
    "Don't just apply, play! Click 'Become a Pogo Stick Pro' instead of 'Apply Now.' It's a bounce in the right direction, away from job-related stress.",
    "Sick of 'Apply Now'? Click 'Nap Enthusiast Certification.' Your résumé might not impress, but your sleep schedule sure will.",
    "Consider this your power-up: Instead of 'Apply Now,' click 'Binge-Watch Sloth Documentaries.' Sloths are slow and steady – the perfect pace for a job search.",
  ];

  const getRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * allApplyNowMessages.length);
    console.log(allApplyNowMessages.length);
    const randomText = allApplyNowMessages[randomIndex];
    navigate("/work-in-progress", { state: { text: randomText } });
  };

  return (
    <div>
      {/* for mobile */}

      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            className="p-6 md:hidden bg-white border rounded-lg mt-6"
            key={item?.id}
          >
            <div className="flex items-center justify-center font-medium gap-4">
              <div className="w-14 p-2 border rounded-full">
                <img
                  src={item?.imageURL}
                  className=" md:w-[15%] overflow-hidden"
                />
              </div>
              <div>
                <p>{item.title}</p>
                <p className=" text-sm  text-gray-400">Type: {item.type}</p>
              </div>
            </div>
            <p className=" text-justify text-gray-500 mt-6">
              {item.description.slice(0, 150) + "..."}
            </p>
            <Link to="/work-in-progress">
              <div className="  mt-4">
                <CustomButton
                  text={"Apply Job"}
                  bgColor={"lightBlue"}
                  textColor={"white"}
                  width={"full"}
                />
              </div>
            </Link>
          </div>
        ))
      ) : (
        <div className="md:hidden w-full flex flex-col items-center justify-center">
          {/* <img src={NotFound} className="h-340" /> */}
          <img src={NotFound} alt="item not found" />
          <p className=" text-xl mt-12">Jobs not found</p>
        </div>
      )}

      {/* for computer */}

      {data && data.length > 0 ? (
        data.map((item) => (
          <div className="hidden w-full md:flex mt-8" key={item?.id}>
            <div className="w-full bg-white rounded-lg p-8">
              <div className="flex w-full gap-12 items-center justify-between">
                <div className=" w-full flex flex-col">
                  <div className=" flex gap-7 ">
                    <div className="border rounded-full w-24 h-24 flex items-center justify-center p-3">
                      <img src={item?.imageURL} className=" overflow-hidden" />
                    </div>
                    <div>
                      <p className=" text-xl font-bold">{item.title}</p>{" "}
                      <div className=" flex gap-10">
                        <div className=" flex-col mt-3">
                          <p className=" text-gray-500">Type</p>
                          <p className=" font-semibold">{item.type}</p>
                        </div>
                        {/* <div className=" flex-col mt-3">
                      <p className=" text-gray-500">Shift</p>
                      <p className=" font-semibold">{shift}</p>
                    </div> */}
                        <div className=" flex-col mt-3">
                          <p className=" text-gray-500">Organization</p>
                          <p className=" font-semibold">{item.organization}</p>
                        </div>
                        {/* <div className=" flex-col mt-3">
                      <p className=" text-gray-500">Requirements</p>
                      <p className=" font-semibold">{requirements}</p>
                    </div> */}
                      </div>
                    </div>
                    <p className=" text-lg font-semibold"></p>
                  </div>

                  {/* <div className=" w-full flex justify-between items-center gap-10">
                    <p className=" w-full text-gray-500 text-sm mt-3 w-[70%]">
                      {item.description}
                    </p>
                    <div>
                      <a href="https://t.me/shubh007123">
                        <CustomButton
                          text={"Apply Job"}
                          bgColor={"lightBlue"}
                          textColor={"white"}
                        />
                      </a>
                    </div>
                  </div> */}

                  <div className=" w-full flex items-center justify-between gap-6">
                    <p className=" w-[85%] mt-6 text-gray-600">
                      {item.description.slice(0, 250) + "..."}
                    </p>
                    <button
                      className="p-3 bg-lightBlue text-white md:px-10 rounded-lg"
                      onClick={getRandomMessage}
                    >
                      Apply Now
                    </button>
                    {/* <CustomButton
                      text={"Apply Job"}
                      bgColor={"lightBlue"}
                      textColor={"white"}
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full hidden md:flex flex-col min-h-7xl items-center justify-center">
          {/* <img src={NotFound} className="h-340" /> */}
          {/* <p className="text-xl text-headingColor font-semibold my-2">
            Items Not Available
          </p> */}
          <img src={NotFound} alt="item_not_found" />
          <p className=" text-2xl mt-16">Job not found</p>
        </div>
      )}
    </div>
  );
};

export default HomeCard;
