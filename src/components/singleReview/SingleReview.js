import React from 'react';
import { UserCircleIcon } from '@heroicons/react/24/solid';

const SingleReview = ({review}) => {
   console.log(review.photo)
   const {comment, name, email, photo, rating} = review;
   return (
      <div className="overflow-x-auto w-full">
  <table className="table w-full">
    
    {/* <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead> */}
    <tbody>
    
      <tr>
        
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                {
                  review?.photo ? <img src={photo} alt="" /> : <UserCircleIcon className="h-6 w-6 mx-auto text-blue-500"/>
                }
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{email}</div>
            </div>
          </div>
        </td>
        <td>
          {comment}
          <br/>
          <span className="badge badge-ghost badge-sm">{rating}</span>
        </td>
        {/* <td>Purple</td> */}
        {/* <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th> */}
      </tr>
    </tbody>
    
    {/* <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot> */}
    
  </table>
</div>
   );
};
export default SingleReview;