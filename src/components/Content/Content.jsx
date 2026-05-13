import React, { use } from "react";
import { useContext } from "react";
import { Themecontext } from "../../Store/Context";
const Content = ({ them }) => {
  const themContext = useContext(Themecontext);
  return (
    <div>
      <p className={themContext}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, magni.
      </p>
    </div>
  );
};

export default Content;
