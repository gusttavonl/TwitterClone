import { Avatar } from "@material-ui/core";
import { Comment, EmojiEmotions, Favorite, Gif, Image, LocalActivity, Share, Star } from "@material-ui/icons";
import React from "react";
import "./Feed.css";

function Feed() {
  return (
    <div className="feed">
      <div className="feedHeader">
        <h2>Home</h2>
        <Star className="feedStar" />
      </div>
      <div className="feedWrite">
        <Avatar className="feedWriteAvatar" src={"https://avatars.githubusercontent.com/u/77861206?s=460&u=34c77898a2036ccc169a2a4dc86c9d1e5faa1abc&v=4"} />
        <p><input placeholder="No que esta pensando?" /></p>
        <div className="feedWriteICons">
            <Gif />
            <EmojiEmotions />
            <Image />
        </div>
        <button className="feedWriteButton">Tweet</button>    
      </div>
      <div className="feedTimeLine">
        <Avatar className="feedTimeLineAvatar" src={"https://avatars.githubusercontent.com/u/77861206?s=460&u=34c77898a2036ccc169a2a4dc86c9d1e5faa1abc&v=4"} />
        <h4>GustavoNoronha <span>@gustavonoronha</span></h4>
        <p> Estou Pensando em Programação <span>#code</span></p>
        <div className="feedTimeLineIcons">
            <Comment />
            <Favorite />
            <Share /> 
        </div>
      </div>    

    </div>
  );
}

export default Feed;
