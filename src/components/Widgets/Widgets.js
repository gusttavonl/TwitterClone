import { Search, Settings } from "@material-ui/icons";
import React from "react";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <p className="widgetsInput"><Search /> <input placeholder="Busque no Twiiter" /></p>
      <div className="widgetsForYou">
        <div className="widgetsForYouTitles">
          <h4>Trends For you</h4>
          <Settings className="widgetsForYouTitlesIcon" />
        </div>
        <div className="widgetsForYouList">
          <h6>Trending WorldWide</h6>
          <h4>#BreakingNews</h4>
          <div className="widgetsForYouListItem">
            <h6>Space</h6>
            <p>Fotos da lua impressionam</p>
            <p> o mundo</p>
            <img className="widgetsForYouListItemImg" src={"https://miro.medium.com/max/4000/1*st5zTbZqIrPQ4tCHzMOQyg.jpeg"} />
        
          </div>
          <h6 className="widgetsForYouListDesc">10.200 pessoas gostaram</h6>
        </div>
      </div>
    </div>
  );
}

export default Widgets;
