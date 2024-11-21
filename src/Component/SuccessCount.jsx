import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const SuccessCount = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
      <div className="bg-world-map bg-cover bg-center bg-no-repeat lg:h-[500px] pb-2">
        <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center pt-4">
          <h1 className="text-4xl text-white font-bold mb-4">
            Our Achievements
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-20 lg:ml-20 px-2 justify-evenly gap-5">
          <div className="text-white bg-black bg-opacity-50 flex flex-col justify-center items-center space-y-2 p-5 rounded-xl lg:w-[90%]">
            <h1 className="text-3xl font-bold">User Count</h1>
            <p className="text-2xl">{counterOn && <CountUp className="text-2xl font-bold" start={0} end={867} duration={5} delay={0}></CountUp>} +</p>
          </div>
          <div className="text-white bg-black bg-opacity-50 flex flex-col justify-center items-center space-y-2 p-5 rounded-xl lg:w-[90%]">
            <h1 className="text-3xl font-bold">Lesson Count</h1>
            <p className="text-2xl">{counterOn && <CountUp className="text-2xl font-bold" start={0} end={10} duration={5} delay={0}></CountUp>} +</p>
          </div>
          <div className="text-white bg-black bg-opacity-50 flex flex-col justify-center items-center space-y-2 p-5 rounded-xl lg:w-[90%]">
            <h1 className="text-3xl font-bold">vocabulary count</h1>
            <p className="text-2xl">{counterOn && <CountUp className="text-2xl font-bold" start={0} end={543} duration={5} delay={0}></CountUp>} +</p>
          </div>
          <div className="text-white bg-black bg-opacity-50 flex flex-col justify-center items-center space-y-2 p-5 rounded-xl lg:w-[90%]">
            <h1 className="text-3xl font-bold">Tutorial Count</h1>
            <p className="text-2xl">{counterOn && <CountUp className="text-2xl font-bold" start={0} end={130} duration={5} delay={0}></CountUp>} +</p>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default SuccessCount;
