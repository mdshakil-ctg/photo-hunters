import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";

const SingleReview = ({ review }) => {
  console.log(review.photo);
  const { comment, name, photo, rating } = review;
  return (
    <div className="overflow-x-auto w-full ml-4">
      <table className="table w-full">
        <tbody>
          <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div className="mask mask-squircle flex items-center w-12 h-12">
                  {review?.photo ? (
                    <img src={photo} alt="" />
                  ) : (
                    <UserCircleIcon className="h-6 w-6 mx-auto text-red-500" />
                  )}
                </div>

                <div>
                  {name ? (
                    <div className="font-bold">{name}</div>
                  ) : (
                    <div>Clients Name :</div>
                  )}
                  <div className="text-sm opacity-50">{}</div>
                </div>
              </div>
            </td>
            <td>
              {comment}
              <br />
              <span className="badge badge-ghost badge-sm">{rating}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default SingleReview;
