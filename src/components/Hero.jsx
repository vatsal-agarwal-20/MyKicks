import React from "react";

const Hero = ({heroApi : {title, subtitle, btntext, sociallinks, videos, img}}) => {
  return (
    <>
    <div>
        <div></div>
        <div>
          <div>
            <h1></h1>
            <h1></h1>
            <button></button>
            <div></div>
            <div></div>
          </div>
          <div>
            <img
            src={img}
            alt=""
            className=""
            />
          </div>
        </div>
    </div>
    </>
  )
}

export default Hero;