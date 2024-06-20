import React from "react";

const Flexbox = ({
  direction = "row", // default direction
  justifyContent = "flex-start", // default justify content
  alignItems = "stretch", // default align items
  flexWrap = "nowrap", // default flex wrap
  className = "",
  children,
  ...restProps
}) => {
  const flexboxStyles = {
    display: "flex",
    flexDirection: direction,
    justifyContent,
    alignItems,
    flexWrap,
  };

  return (
    <div
      className={`flexbox-container ${className}`}
      style={flexboxStyles}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default Flexbox;
