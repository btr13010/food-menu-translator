import React from "react";
import Menu from "../Table/Menu";

const ShowMenu = (props) => {
  return (
    <div>
      <h3>Extracted Menu:</h3>
      <Menu menu={props.menu} />
    </div>
  );
};

export default ShowMenu;
