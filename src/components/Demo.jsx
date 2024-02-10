import React, { useEffect, useState } from "react";

const Demo = () => {
  const [selectedMessage, setSelectedMessage] = useState();
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

  const index = () => {
    return Math.floor((Math.random() * 10) % allApplyNowMessages.length);
  };

  useEffect(() => {
    const randomIndex = index(); // Call the index function to get the random index
    setSelectedMessage(allApplyNowMessages[randomIndex]); // Set the selected message to the message at the random index
  }, [allApplyNowMessages]);

  return (
    <div className="min-h-[700px] flex items-center justify-center">
      {selectedMessage && (
        <p className="text-center text-2xl font-semibold  md:max-w-2xl px-4">
          {selectedMessage}
        </p>
      )}
    </div>
  );
};

export default Demo;
