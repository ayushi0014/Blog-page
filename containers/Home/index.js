import React from "react";
import "./style.css";
import Card from "../../components/UI/Card";
import RecentPosts from "./RecentPosts";
import Layout from "../../components/Layout";

const ImageGallary = (props) => (
  <div className="gallaryPost" style={props.gallaryStyle}>
    <section style={{ width: props.largeWidth }}>
      <div className="mainImageWrapper">
        <img
          src={require("../../blogPostImages/" + props.imagesArray[1])}
          alt=""
        />
      </div>
    </section>
  </div>
);

const Home = (props) => {
  return (
    <div>
      <Layout>
        <RecentPosts style={{ width: "70%" }} />
      </Layout>
    </div>
  );
};

export default Home;
