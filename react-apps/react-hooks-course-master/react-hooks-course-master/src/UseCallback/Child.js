import React, { useEffect } from "react";
//utiliza retunrComment en una funcion gracias al Callback
function Child({ returnComment }) {
  useEffect(() => {
    console.log("FUNCTION WAS CALLED");
  }, [returnComment]);

  return <div>{returnComment("Pedro")}</div>;
}

export default Child;
