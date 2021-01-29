import { Search } from "@material-ui/icons";
import React from "react";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <p className="widgetsInput"><Search /> <input placeholder="Busque no Twiiter" /></p>
      <div className="widgetsForYou">
        For you
      </div>
    </div>
  );
}

export default Widgets;
