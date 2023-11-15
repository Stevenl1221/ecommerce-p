import { useEffect } from "react";

const Child = ({ returnComment }) => {
  useEffect(() => {
    console.log("FUNCTION WAS CALLED");
  }, [returnComment]);
  return <div>{returnComment(" Steven")}</div>;
};

export default Child;
