import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
  useRef
} from "react";
import ReactDOM from "react-dom";

function useInputValue(initialValue) {
  let [value, setValue] = useState(initialValue);
  let onChange = useCallback(function(event) {
    setValue(event.currentTarget.value);
  }, []);

  return {
    value,
    onChange
  };
}

export default function App() {
  const name = useInputValue("Jamie");
  console.log(name);
  return (
    <div>
      <input {...name} />
      {name.value}
    </div>
  );
}
