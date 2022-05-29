import React from "react";
import classnames from "classnames";

function MenuCategory(props) {
  return (
    <>
      <div
        className={classnames("py-2 px-1", {
          "text-RedShade-400 bg-RedShade-50 border-r-4 border-RedShade-400":
            props.isActive,
        })}>
        <h3 id={props.name} onClick={props.onClickHandler}>
          {props.name} ({props.items.length})
        </h3>
      </div>
    </>
  );
}

export default MenuCategory;