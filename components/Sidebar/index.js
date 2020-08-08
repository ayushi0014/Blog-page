import React, { useState, useEffect } from "react";
import "./style.css";
import Card from "../UI/Card";

import { NavLink } from "react-router-dom";

/**
 * @author
 * @function Sidebar
 **/

const Sidebar = (props) => {
  return (
    <div
      className="sidebarContainer"
      style={{
        width: props.width,
      }}
    >
      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="cardHeader">
          <span>Relative Posts</span>
        </div>
        <div className="profileImageContainer">
          <img
            src="https://pbs.twimg.com/profile_images/1207332742964236288/EHK-o2A-_400x400.jpg"
            alt=""
          />
        </div>
        <div className="cardBody">
          <p className="personalBio">
            American media personality, socialite, model, and businesswoman.
          </p>
        </div>
      </Card>

      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="cardHeader">
          <span>Social Network</span>
        </div>
      </Card>

      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="cardHeader">
          <span>Recent Posts</span>
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
