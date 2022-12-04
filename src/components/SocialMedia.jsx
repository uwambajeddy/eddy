/* eslint-disable quotes */
import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://www.linkedin.com/in/eddy-uwambaje-920a27228/">
      <BsLinkedin />
    </a>
    <a href="https://github.com/uwambajeddy">
      <BsGithub />
    </a>
    <a href="https://www.instagram.com/eddy.kamoso/">
      <BsInstagram />
    </a>
  </div>
);

export default SocialMedia;
