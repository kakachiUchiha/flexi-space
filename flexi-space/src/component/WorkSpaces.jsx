import React from "react";
import { WorkSpacesList } from "./WorkSpacesList";

import "./WorkSpaces.css";

import WorkSpacesItem from "./WorkSpacesItem";

function WorkSpaces() {

  return (
    <div className="WorkSpaces"  id="work">
      <h1 className="WorkSpacesTitle" >Our WorkSpaces</h1>
      <div className="WorkSpacesList">
        {WorkSpacesList.map((workspace, key) => {
          return (
            <WorkSpacesItem
              key={key}
              image={workspace.image}
              name={workspace.name}
              price={workspace.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default WorkSpaces;