import { useEffect, useRef } from "react";

function useTimeout({ callback, delay }) {
  const callbackRef = useRef(callback);

  // Update the callback ref if callback changes
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    // Set up the timeout with the current delay
    if (delay !== null) {
      const timerId = setTimeout(() => {
        callbackRef.current();
      }, delay);
      return () => clearTimeout(timerId);
    }
  }, [delay]);
}

export default useTimeout;
