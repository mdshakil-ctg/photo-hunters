import React from "react";


const About = () => {

  
  return (
   
    <div id="about">
      <h1 className="text-5xl font-semibold text-center text-yellow-500">About Me</h1>
      <div className="flex flex-col lg:flex-row gap-5 mt-16">
      <div className="lg:w-1/2">
         <img className="rounded-xl" src="https://i.ibb.co/whjrdZf/service5.png" alt=""></img>
      </div>
      <div className="lg:w-1/2 px-5">
      <h2 className="text-gray-800 text-2xl font-semibold mb-2">PHOTOGRAPHY IS GREAT</h2>
      <p className="text-gray-500">
        Photography is like a moment, an instant. You need a half-second to get
        the photo. So it's good to capture people when they are themselves.I
        became passionate about design filmmaking when I graduated from UCLA,
        and one of the things I always wanted to do was shoot really high
        quality film, so I got into time-lapse photography - so that means when
        you shoot a flower.
      </p>
      <p className="bg-yellow-300 p-2 my-3">
        You're shooting, like, one frame every twenty minutes, so that's <br /> Seconds
        of a film per day. Photography is a pursuit that allows <br /> Hands-on with
        what you show people of either yourself or the
      </p>
      <p className="text-gray-500">You do have a modicum of creative freedom as an actor, but you're still very much a cipher for other people's art. Photography gives you the opportunity to use your sensibility and everything you are to say something</p>
    </div>
    </div>
    </div>
  );
};

export default About;
