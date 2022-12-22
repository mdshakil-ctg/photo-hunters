import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import { useState } from "react";
import { useEffect } from "react";
import SingleReview from "../singleReview/SingleReview";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ServiceDetails = () => {
  const { title, img_url, price, description, service_id } = useLoaderData();
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  
  useEffect(() => {
    fetch(`https://photo-hunters-server.vercel.app/reviews?service_id=${service_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error(err));
  }, [service_id]);

  const reviewHandle = (event) => {
    event.preventDefault();
    const form = event.target;
    const rating = form.rating.value;
    const comment = form.comment.value;

    const data = {
      rating,
      comment,
      service_id,
      email: user.email,
      name: user.displayName,
      photo: user.photoURL,
      title,
    };

    fetch("https://photo-hunters-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("review added succesfully");
        form.reset();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="card bg-base-100 my-14 shadow-xl">
        <figure>
          <img src={img_url} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="font-semibold">
            Price : <span className="text-2xl text-rose-800">{price}$</span>
          </p>
          <p className="text-gray-500">{description}</p>
        </div>
      </div>
      <div className={user?.uid ? "block" : "hidden"}>
        <div className="">
          <h1 className="text-center text-3xl text-yellow-500 mb-6 font-semibold">Put Your Review Here</h1>
        </div>
        <div className="text-center"> 
          <form  onSubmit={reviewHandle}>
            <input
              required
              name="rating"
              type="text"
              placeholder="Your Rating"
              className="input input-bordered input-info w-full max-w-xs mb-5"
            />
            <br />
            <input
              name="comment"
              className="input input-bordered input-info w-full max-w-xs mb-5"
              placeholder="Your Comment"
              
            ></input>
            <br />
            <input
              required
              type="submit"
              className="btn btn-info"
              value="Post Review"
            />
          </form>
        </div>
      </div>

      <div className={user?.uid ? "hidden" : "block"}>
        <p className="text-center text-2xl hover:bg-gray-500">
          Please{" "}
          <span className="text-red-300 hover:bg-gray-500 hover:px-2 rounded">
            <Link to="/login">Login</Link>
          </span>{" "}
          to post a review
        </p>
      </div>

      <div>
        <h1 className="ml-8 text-center text-3xl text-yellow-500 font-semibold mt-5">
          What Our Client's Said
        </h1>

        {reviews.map((review) => (
          <SingleReview key={review._id} review={review}></SingleReview>
        ))}
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default ServiceDetails;
