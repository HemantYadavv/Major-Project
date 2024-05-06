
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Profile.css'

const Profile = () => {

  const [currentUser, setCurrentUSer ] = useState(
    JSON.parse(sessionStorage.getItem("user"))
);

 const useForm = useFormik({
  initialValues: currentUser, 
  onSubmit : async (data) => {
    console.log(data);
  const res = await fetch(url + '/user/update/'+currentUser._id, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  console.log(res.status);
  const userData = await res.json();
  console.log(userData);
  setCurrentUSer(userData);
  sessionStorage.setItem("user", JSON.stringify(userData));
  }
 });
  return (
    <>
      

      <div className="padding">
  <div className="col-md-12">
    {/* Column */}
    <div className="card">
      {" "}
      <img
        className="card-img-top "
        src="https://static.vecteezy.com/system/resources/thumbnails/019/011/154/small/abstract-watercolor-paint-background-beautiful-blue-green-and-yellow-watercolor-splash-design-colorful-plain-green-tones-watercolor-textures-paper-textured-aquarelle-canvas-for-modern-creative-design-vector.jpg"
        alt="Card image cap"
      />
      <div className="card-body little-profile text-center">
        <div className="pro-img mx-auto d-block">
          <img src="https://i.imgur.com/8RKXAIV.jpg" alt="user" />
        </div>
        <h3 className="m-b-0">Brad Macullam</h3>
        <p>Web Designer &amp; Developer</p>{" "}
        <a
          href="javascript:void(0)"
          className="m-t-10 waves-effect waves-dark btn btn-primary btn-md btn-rounded"
          data-abc="true"
        >
          Follow
        </a>
        <div className="row text-center m-t-20">
          <div className="col-lg-4 col-md-4 m-t-20">
            <h3 className="m-b-0 font-light">10434</h3>
            <small>Articles</small>
          </div>
          <div className="col-lg-4 col-md-4 m-t-20">
            <h3 className="m-b-0 font-light">434K</h3>
            <small>Followers</small>
          </div>
          <div className="col-lg-4 col-md-4 m-t-20">
            <h3 className="m-b-0 font-light">5454</h3>
            <small>Following</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


          
        </>


      
  )
}

export default Profile;