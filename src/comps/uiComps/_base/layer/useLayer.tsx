import { useRef } from "react";

let count = 1000;

const useLayer = () => {
  const ref = useRef<number>(-1);
  if (ref.current === -1) {
    ref.current = count++;
  }
  return {
    currentTop: ref.current,
  };
};

export default useLayer;
