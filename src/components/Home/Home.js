import React from "react";
import Carousel from "../carousel/Carousel";
import { useEffect, useState } from "react";
import HomeServices from "../homeServices/HomeServices";
import { Link } from "react-router-dom";
import About from "../About/About";
import Features from "../Features/Features";


const Home = () => {
  const [services, setServices] = useState([]);

  

  useEffect(() => {
    fetch("https://photo-hunters-server.vercel.app/home/services")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setServices(data)
      });
  }, []);

 
  return (
    <div>
      
      <Carousel></Carousel>
      <div className="text-center p-4 mt-10 ">
        <h1 className="text-4xl font-semibold mb-3 text-yellow-500">Gallary</h1>
        <p className="mb-0"> Its an essential tool to inspire the desire to protect wildlife and spark real change.</p>
      </div>
      <div className="grid lg:grid-cols-3 mt-10 mb-0">
        {services.map((service) => (
          <HomeServices key={service._id} service={service}></HomeServices>
        ))}
      </div>
      <div className="text-center mb-7">
        <Link to="/services">
          <button className="btn btn-info px-7">See All</button>
        </Link>
      </div>
      <About></About>
      <Features></Features>
    </div>
  );
};

export default Home;
