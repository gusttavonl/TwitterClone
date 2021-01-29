import { Star } from "@material-ui/icons";
import React from "react";
import "./Feed.css";

function Feed() {
  return (
    <div className="feed">
      <div className="feedHeader">
        <h2>Home</h2>
        <Star className="feedStar" />
      </div>

    </div>
  );
}

export default Feed;
