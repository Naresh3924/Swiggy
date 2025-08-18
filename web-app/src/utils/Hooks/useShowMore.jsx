import { useState } from "react";

const useShowMore = () => {
  const [initialValue, setInitialValue] = useState(0);
  const [indexValue, setIndexValue] = useState(12);

  setInitialValue(initialValue);
  setIndexValue(indexValue + 12);
  return initialValue, indexValue;
};

export default useShowMore;
