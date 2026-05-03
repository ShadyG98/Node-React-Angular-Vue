import React, { forwardRef, useImperativeHandle, useState } from "react";
const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({ 
    alterToggle() { 
      setToggle(!toggle);
    },
  }));
  return (
    <>
      <button>Button From Child</button>
      {toggle && <span>Toggle</span>} //Con toggle alterna de utton From Child a utton From Parent
    </>
  );
});

export default Button;

