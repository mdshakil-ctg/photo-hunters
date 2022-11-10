import React from "react";
import Carousel from "../carousel/Carousel";
import { useEffect, useState } from "react";
import HomeServices from "../homeServices/HomeServices";
import { Link } from "react-router-dom";
import About from "../About/About";
import Features from "../Features/Features";
import useTitle from "../../hooks/useTitle";

const Home = () => {
  const [services, setServices] = useState([]);

  useTitle("Home")

  useEffect(() => {
    fetch("http://localhost:5000/home/services")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setServices(data)
      });
  }, []);

 
  return (
    <div>
      <Carousel></Carousel>
      <div className="grid lg:grid-cols-3 mt-24 mb-7">
        {services.map((service) => (
          <HomeServices key={service._id} service={service}></HomeServices>
        ))}
      </div>
      <div className="text-center mb-7">
        <Link to="/services">
          <button className="btn btn-info">See All</button>
        </Link>
      </div>
      <About></About>
      <Features></Features>
    </div>
  );
};

export default Home;
